const ct = require("../backend/createtour.js")

describe("testing create tour", () => {
    let testtur = ct.createTour(1,"ToreTur", "Tur med Tore", 2, "www.google.bilde.com", true);

    test("tour gets properly created", () => {
        expect(testtur.owner_id).toBe(1);
        expect(testtur.name).toBe("ToreTur");
        expect(testtur.description).toBe("Tur med Tore");
        expect(testtur.price).toBe(2);
        expect(testtur.img).toBe("www.google.bilde.com");
        expect(testtur.accessibility).toBe(true);
    })
})
