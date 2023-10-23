const create_tourModule = require("../backend/create_tour");

test("Tester skriving til JSON", () => {
    expect(create_tourModule.writeToJSON(testTur)).toBe("Data has been written to tours.json");
});
