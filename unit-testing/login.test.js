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

describe("Create user function tests", () => {
    let brukere = "brukere";
    let data = [{}]
    window.mock.setItem(brukere, JSON.stringify(data))
});

describe("loginfunction tests", () => {

    document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8')
    let error = document.getElementById("errormsg")

    test("Checking if error is produced correctly with user no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = true;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = false;
        loginM.loginFunction(test);
        localStorage.removeItem(test)

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with seller no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = true;
        document.getElementById('admin').checked = false;
        loginM.loginFunction(test);
        localStorage.removeItem(test)

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with admin no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = true;
        loginM.loginFunction(test);
        localStorage.removeItem(test)

        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    /*
    test("Error if username and or password is wrong for user", () => {});
    test("Error if username and or password is wrong for seller", () => {});
    test("Error if username and or password is wrong for admin", () => {});
    test("Returning user if username and password matches for user", () => {});
    test("Returning user if username and password matches for seller", () => {});
    test("Returning user if username and password matches for admin", () => {});
     */
});


