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

class Tour {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

var testTur1 = new Tour('tur 1', 2000);
var testTur2 = new Tour('tur 2', 4500);

const tours = [testTur1, testTur2];

if (typeof window === "undefined") {
  // Vis vi skjører i node.js
  // Eksportering til test
  module.exports = { writeToJSON: writeToJSON, readFromJSON: readFromJSON };
}

module.exports = { writeToJSON, readFromJSON };
