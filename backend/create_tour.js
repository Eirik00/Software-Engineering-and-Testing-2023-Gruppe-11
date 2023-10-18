const fs = require("fs");

function writeToJSON(tour) {
    
  fs.writeFile('backend/JSON/tours.json', JSON.stringify(tour, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
    } else {
      console.log('Data has been written to tours.json');
    }
  });
  }

function readFromJSON(){

  fs.readFile('backend/JSON/tours.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });
}

  class Tour {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  var testTur = new Tour('tur', 2000);

  writeToJSON(testTur);

  readFromJSON();

