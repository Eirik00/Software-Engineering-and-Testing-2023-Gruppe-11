const formMod = require ("../backend/getfromform");
const fs = require("fs");
const setLocalStorage = (id, data) => {
    window.mock.setItem(id, JSON.stringify(data));
};

describe("testing errors", () => {

    test("tur opprettet", () => {
        let testtourlist = {};
        document.body.innerHTML = fs.readFileSync("./Nettside/new-tour/index.html", 'utf-8');
        document.getElementById('name').value = 'Testtour';
        document.getElementById('description').value = 'Koselig testtur med TestTore';
        document.getElementById('price').value = 500;
        document.getElementById('accessibility').checked = true;
        const fileInput = document.getElementById('img');
        const file = new File([''], 'test.txt', { type: 'text/plain' });
        Object.defineProperty(fileInput, 'files', {
            value: [file],
        });
        formMod.saveTour(false);
        let error = document.getElementById('errormsg')
        expect(error.innerHTML).toBe('* Tur opprettet');
    });

    
})