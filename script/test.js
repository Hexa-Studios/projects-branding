const fs = require('fs');
const path = require('path');

// Set the base directory path
const baseDir = './docs/';

// Function to get the relative path from the base directory
function getRelativePath(absolutePath) {
  return path.relative(baseDir, absolutePath);
}

// Recursive function to list all .md file paths
function listMdFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  const mdFiles = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const nestedFiles = listMdFiles(filePath);
      mdFiles.push(...nestedFiles);
    } else if (path.extname(filePath) === '.md') {
      const absolutePath = path.resolve(filePath);
      const relativePath = getRelativePath(absolutePath);
      mdFiles.push({ absolutePath, relativePath });
    }
  }

  return mdFiles;
}

// Call the listMdFiles function with the base directory
const mdFileList = listMdFiles(baseDir);

// Print the results
mdFileList.forEach(({ absolutePath, relativePath }) => {
  console.log(`Absolute Path: ${absolutePath}`);
  console.log(`Relative Path: ${relativePath}`);
  console.log('---');
});
