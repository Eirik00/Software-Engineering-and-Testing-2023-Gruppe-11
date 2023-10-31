const fs = require("fs");

function writeToJSON(tours) {
  return new Promise((resolve, reject) => {
    const toursToWrite = JSON.stringify(tours, null, 2);

    fs.writeFile('backend/JSON/tours.json', toursToWrite, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        reject(err);
      } else {
        console.log('Data has been written to tours.json');
        resolve();
      }
    });
  });
}

function readFromJSON() {
  return new Promise((resolve, reject) => {
    fs.readFile('backend/JSON/tours.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        reject(err);
      } else {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        resolve(jsonData);
      }
    });
  });
}




if (typeof window === "undefined") {
  // Vis vi skjører i node.js
  // Eksportering til test
  module.exports = { writeToJSON: writeToJSON, readFromJSON: readFromJSON };
}

module.exports = { writeToJSON, readFromJSON };
