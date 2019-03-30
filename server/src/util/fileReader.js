const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const readFile = (filePath, arrayOfFields = [], model, queryInterface) => {


  return new Promise((resolve, reject) => {
    let queryInterfaceResult;
    const instream = fs.createReadStream(filePath);
    const outstream = new stream();
    const lineReader = readline.createInterface(instream, outstream);

    let arrayData = [];
    let lineCount = 0;

    lineReader.on('line', (line) => {
      if (lineCount === 0) {
        lineCount++;
        return;
      }
      lineCount++;
      const lineSplitted = line.split("\t");
      const data = {};
      arrayOfFields.forEach((field, index) => {
        data[field] = lineSplitted[index] !== '\\N' ? lineSplitted[index] : null;
      })
      arrayData.push(data);
      if (arrayData.length > 10000) {
        queryInterfaceResult = queryInterface.bulkInsert(model, arrayData).then(result => {
          return result
        });
        arrayData = [];
      }
    })

    lineReader.on('close', () => {
      resolve({
        queryInterfaceResult
      });
    })
  })
};

module.exports = readFile;