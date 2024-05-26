const fs = require('fs');
const path = require('path');

const sourceDict = './src/locales/';

function recursiveSort(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => recursiveSort(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const sortedObj = {};
    Object.keys(obj)
      .sort()
      .forEach((key) => {
        sortedObj[key] = recursiveSort(obj[key]);
      });
    return sortedObj;
  } else {
    return obj;
  }
}

function sortI18nSourceJsonFrom(dirPath = sourceDict) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      sortI18nSourceJsonFrom(filePath);
    } else if (path.extname(file) === '.json') {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      const sortedData = recursiveSort(data);
      fs.writeFileSync(filePath, JSON.stringify(sortedData, null, 2));
    }
  });
}

sortI18nSourceJsonFrom();
