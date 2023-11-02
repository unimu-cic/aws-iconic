const fsp = require('fs').promises
const fs = require('fs')
const camelcase = require('camelcase')
const { promisify } = require('util')
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { compile: compileVue } = require('@vue/compiler-dom')
const path = require('path')
const { dirname } = path

const CLEAN_PATH_PREFIX_REGEX = /arch_|arch-|res_/g
const CLEAN_INVALID_SYMBOL_REGEX = /[^a-zA-Z0-9/._-]+/g
const CLEAN_ICON_SIZE_REGEX = /_?(16|32|48|64)_?/g
const appendFolders = ['group', 'contact-center', 'serverless']
const categoryFolders = ['src/Architecture-Service-Icons', 'src/Resource-Icons']
const categoryAlias = {
  iot: 'internet-of-things',
  'app-integration': 'application-integration',
}

const transform = {
  react: async (svg, componentName, format) => {
    const component = await svgr(svg, { ref: true, titleProp: true }, { componentName })
    const { code } = await babel.transformAsync(component, {
      plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
    })

    if (format === 'esm') {
      return code
    }

    return code
      .replace('import * as React from "react"', 'const React = require("react")')
      .replace('export default', 'module.exports =')
  },
  vue: (svg, componentName, format) => {
    const { code } = compileVue(svg.replace(/<\?xml[^>]*>/, '').trim(), {
      mode: 'module',
    })

    if (format === 'esm') {
      return code.replace('export function', 'export default function')
    }

    return code
      .replace(
        /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
        (_match, imports, _quote, mod) => {
          let newImports = imports
            .split(',')
            .map((i) => i.trim().replace(/\s+as\s+/, ': '))
            .join(', ')

          return `const { ${newImports} } = require("${mod}")`
        },
      )
      .replace('export function render', 'module.exports = function render')
  },
}

function subFolderNames(folder) {
  return fs.readdirSync(folder).filter((item) => fs.statSync(path.join(folder, item)).isDirectory())
}

function getAllCategoryNames() {
  const categories = categoryFolders.flatMap((folder) => subFolderNames(folder))
  const cleanedCategories = categories
    .map((item) => item.toLowerCase().replace(CLEAN_PATH_PREFIX_REGEX, ''))
    .map((item) => {
      if (Object.keys(categoryAlias).includes(item)) {
        console.log(categoryAlias[item])
        return categoryAlias[item]
      } else {
        return item
      }
    })

  const uniqueCategories = [...new Set(cleanedCategories)]
    .map((item) => item.toLowerCase())
    .sort((a, b) => a.localeCompare(b))

  return uniqueCategories.concat(appendFolders)
}

const categoryNames = getAllCategoryNames()

function processSVG(filePath, category) {
  // clean the filePath for conventional component name
  const cleanedFilePath = filePath
    .replace(CLEAN_ICON_SIZE_REGEX, '')
    .replace(CLEAN_INVALID_SYMBOL_REGEX, '')
    // .replace(CLEAN_PATH_PREFIX_REGEX, '')
    .replace('_', '-')

  if (!category) {
    category = getCategoryFromFilePath(cleanedFilePath)
  }

  const componentName = getComponentNameFromFilePath(cleanedFilePath, category)

  const fileName = path.basename(cleanedFilePath)

  const targetPath = getTargetPathFromFileName(fileName, category)

  const svg = fs.readFileSync(filePath, 'utf8')

  return {
    svg,
    category,
    targetPath,
    componentName,
  }
}

function getCategoryFromFilePath(filePath) {
  const pathParts = filePath.split('/')
  const fileName = pathParts.pop()
  const fileDir = pathParts.join('/')

  const reversedAlias = Object.fromEntries(Object.entries(categoryAlias).map(([k, v]) => [v, k]))

  let category = categoryNames.find((name) => fileDir.includes(reversedAlias[name]))
  if (!category) {
    category = categoryNames.find((name) => fileDir.includes(name))
  }
  if (!category) {
    category = categoryNames.find((name) => fileName.includes(name))
  }

  return category
}

function getComponentNameFromFilePath(filePath, category) {
  const componentName = path
    .basename(filePath, '.svg')
    .replace(CLEAN_ICON_SIZE_REGEX, '')
    .replace(CLEAN_INVALID_SYMBOL_REGEX, '')

  // add category as prefix to avoid duplicated declaration.
  return camelcase(`${category}-${componentName}`, {
    pascalCase: true,
  })
}

function getTargetPathFromFileName(fileName, category) {
  return path.join(
    category,
    fileName.toLowerCase().replace(CLEAN_ICON_SIZE_REGEX, '').replace(/_/g, '-'),
  )
}

async function readSvgFiles(directory) {
  try {
    const files = await fsp.readdir(directory)
    const svgFiles = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const filePath = path.join(directory, file).toLowerCase()
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        svgFiles.push(...(await readSvgFiles(filePath)))
        continue
      }

      const isSvgFile = filePath.endsWith('.svg')
      const isDark = filePath.includes('dark')
      const isGroup = filePath.includes('group')
      const isSize48 = filePath.includes('48')

      if ((isGroup && (isSvgFile || isDark)) || (!isGroup && isSvgFile && !isDark && isSize48)) {
        svgFiles.push(processSVG(filePath.toLowerCase(), isGroup ? 'group' : undefined))
      }
    }

    return svgFiles
  } catch (error) {
    console.error(`Error reading directory: ${directory}`)
    console.error(error)
    return []
  }
}

function generateImportStatement(category, format) {
  const moduleName = camelcase(category, { pascalCase: true })

  if (format === 'esm') {
    return `import * as ${moduleName} from './${category}'`
  }

  return `module.exports.${moduleName} = require("./${category}")`
}

function generateExportStatement(category, icons) {
  const moduleName = camelcase(category, { pascalCase: true })
  return `${moduleName},`
}

function exportWithCategory(icons, format, includeExtension = true) {
  const importsFiles = Object.keys(icons).map((category) =>
    generateImportStatement(category, format, includeExtension),
  )

  const exportsFiles = Object.keys(icons).map((category) =>
    generateExportStatement(category, icons),
  )

  return `${importsFiles.join('\n')}\n\nexport {\n ${exportsFiles.join('\n ')} \n}\n`
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName, targetPath }) => {
      const extension = includeExtension ? '.js' : ''

      if (format === 'esm') {
        return `export { default as ${componentName} } from './${targetPath.replace(
          '.svg',
          '',
        )}${extension}'`
      }

      return `module.exports.${componentName} = require("./${targetPath.replace(
        '.svg',
        '',
      )}${extension}")`
    })
    .join('\n')
}

async function ensureWrite(file, text) {
  await fsp.mkdir(dirname(file), { recursive: true })
  await fsp.writeFile(file, text, 'utf8')
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2) + '\n')
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

async function buildIcons(packageName, format) {
  const outDir = getOutputDir(packageName, format)

  const icons = await readSvgFiles('./src')

  await Promise.all(icons.flatMap((icon) => handleIcon(icon, packageName, outDir, format)))

  const iconsWithGroup = groupBy(icons, 'category')
  for (const category of Object.keys(iconsWithGroup)) {
    const subIcons = getSubIcons(iconsWithGroup, category)
    await writeGroupFiles(outDir, category, subIcons)
  }

  await writeAllFiles(outDir, iconsWithGroup, format, icons)
}

function getOutputDir(packageName, format) {
  return `./${packageName}${format === 'esm' ? '/esm' : ''}`
}

async function handleIcon({ componentName, svg, targetPath }, packageName, outDir, format) {
  let content = await transform[packageName](svg, componentName, format)
  let types = getTypes(packageName, componentName)

  const newPath = `${outDir}/${targetPath}`
  return [
    await ensureWrite(newPath.replace('svg', 'js'), content),
    ...(types ? [await ensureWrite(newPath.replace('svg', 'd.ts'), types)] : []),
  ]
}

function getTypes(packageName, componentName) {
  return packageName === 'react'
    ? `import * as React from 'react';\ndeclare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;\nexport default ${componentName};\n`
    : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`
}

function getSubIcons(iconsWithGroup, category) {
  return iconsWithGroup[category].map((item) => ({
    ...item,
    targetPath: item.targetPath.replace(`${category}/`, ''),
  }))
}

async function writeGroupFiles(outDir, category, subIcons) {
  await ensureWrite(`${outDir}/${category}/index.js`, exportAll(subIcons, 'esm'))
  await ensureWrite(`${outDir}/${category}/index.d.ts`, exportAll(subIcons, 'esm', false))
}

async function writeAllFiles(outDir, iconsWithGroup, format, icons) {
  await ensureWrite(`${outDir}/grouped.js`, exportWithCategory(iconsWithGroup, format))
  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format))

  await ensureWrite(`${outDir}/grouped.d.ts`, exportWithCategory(iconsWithGroup, 'esm', false))
  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false))
}

async function main(packageName) {
  console.log(`Building ${packageName} package...`)

  await Promise.all([buildIcons(packageName, 'cjs'), buildIcons(packageName, 'esm')])

  const packageJson = JSON.parse(await fsp.readFile(`./${packageName}/package.json`, 'utf8'))

  await ensureWriteJson(`./${packageName}/package.json`, packageJson)

  return console.log(`Finished building ${packageName} package.`)
}

const [packageName] = process.argv.slice(2)

if (!packageName) {
  throw new Error('Please specify a package')
}

main(packageName)
