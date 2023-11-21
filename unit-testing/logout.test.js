const logOutMog = require("../backend/logout");

test("logout", () => {
    window.mock.setItem("login", 1);
    logOutMog.loggOut(window.mock, false);
    expect(window.mock.getItem("login")).toBe();
});