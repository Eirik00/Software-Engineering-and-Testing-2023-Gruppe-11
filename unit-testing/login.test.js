const loginM = require("../backend/login");
const fs = require('fs');

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

describe("loginfunction test", () => {

    document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8')
    let error = document.getElementById("errormsg")

    test("Checking if error is produced correctly with user", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = true;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = false;
        loginM.loginFunction();

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with seller", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = true;
        document.getElementById('admin').checked = false;
        loginM.loginFunction();

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with admin", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = true;
        loginM.loginFunction();

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
});


