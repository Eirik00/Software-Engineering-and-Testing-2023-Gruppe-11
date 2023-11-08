const loginM = require("../backend/login");

describe("login with different users", () => {
    let user = {username: 'bob', password: '12345'};
    let admin = {username: 'karl', password: 'jadda2'}
    let seller = {username: 'ole', password: 'hemmelig!'}

    test("Checking user login", () => {
        expect(loginM.loginUser(user.username, user.password)).toBe("user bob 12345");
    });

    test("Checking admin login", () => {
        expect(loginM.loginAdmin(admin.username, admin.password)).toBe("admin karl jadda2")
    })

    test("Checking admin login", () => {
        expect(loginM.loginSeller(seller.username, seller.password)).toBe("seller ole hemmelig!")
    })
})



