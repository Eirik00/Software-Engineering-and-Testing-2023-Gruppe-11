test("logout", () => {
    window.mock.setItem("login", 1);
    window.mock.removeItem("login")
    expect(window.mock.getItem("login")).toBe();
});