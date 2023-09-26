const loginModule = require("../backend/login");

test("sjekker admin login", () => {
    expect(loginModule.loginAdmin("admin1", "drossap")).toBe("admin admin1 drossap");
});
test("sjekker bruker login", () => {
    expect(loginModule.loginUser("bruker1", "pass1")).toBe("user bruker1 pass1");
})