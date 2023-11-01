const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const sourceDirectory = './icons' // original icons file dir
const destinationDirectory = './src'

function copyAndCleanStructure(sourceDir, destDir, topLevel = true) {
  const files = fs.readdirSync(sourceDir)

  files.forEach((file) => {
    const sourceFilePath = path.join(sourceDir, file)
    const destFilePath = path.join(destDir, file)
    if (fs.statSync(sourceFilePath).isDirectory()) {
      if (topLevel) {
        const destFolderName = file.replace(/_\d+|\d+/g, '')
        const destFolderPath = path.join(destDir, destFolderName)
        mkdirp.sync(destFolderPath)
        copyAndCleanStructure(sourceFilePath, destFolderPath, false)
      } else {
        mkdirp.sync(destFilePath)
        copyAndCleanStructure(sourceFilePath, destFilePath, false)
      }
    } else {
      const extension = path.extname(file)
      if (extension === '.svg') {
        fs.copyFileSync(sourceFilePath, destFilePath)
      }
    }
  })
}

copyAndCleanStructure(sourceDirectory, destinationDirectory)
