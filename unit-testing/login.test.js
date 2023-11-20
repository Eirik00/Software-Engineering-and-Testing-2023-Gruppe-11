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
    beforeEach(() => {
        window.mock.clear();
        data = [];
    });
    let brukere = "brukere";
    let data = [];
    const setLocalStorage = (id, data) => {
        window.mock.setItem(id, JSON.stringify(data));
    };

    test("User is created correctly", () => {
    document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');
    document.getElementById('Cusername').value = 'Testbruker21';
    document.getElementById('Cemail').value = 'ole@hotmail.com';
    document.getElementById('Cpassword').value = 'Testpassord';
    document.getElementById('Cfirmpassword').value = 'Testpassord';
    document.getElementById('Cuser').checked = true;
    document.getElementById('Cseller').checked = false;
    loginM.createUserFunc(data, false);
    setLocalStorage(brukere, data);
    let userList = JSON.parse(window.mock.getItem(brukere));
    expect(userList[0].email).toBe("ole@hotmail.com");
    expect(userList[0].password).toBe("Testpassord");
    expect(userList[0].typeUser).toBe("user");
    expect(userList[0].username).toBe("Testbruker21");
    });

    test("Seller is created correctly", () => {
        document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');
        document.getElementById('Cusername').value = 'Testbruker211';
        document.getElementById('Cemail').value = 'oleq@hotmail.com';
        document.getElementById('Cpassword').value = 'Testpassordd';
        document.getElementById('Cfirmpassword').value = 'Testpassordd';
        document.getElementById('Cuser').checked = false;
        document.getElementById('Cseller').checked = true;
        loginM.createUserFunc(data, false);
        setLocalStorage(brukere, data);
        let userList = []
        userList = JSON.parse(window.mock.getItem(brukere));
        expect(userList[0].email).toBe("oleq@hotmail.com");
        expect(userList[0].password).toBe("Testpassordd");
        expect(userList[0].typeUser).toBe("seller");
        expect(userList[0].username).toBe("Testbruker211");
    });

    test("Produces error when missing a field", () => {
        document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');
        document.getElementById('Cusername').value = 'Testbruker21';
        document.getElementById('Cemail').value = null;
        document.getElementById('Cpassword').value = 'Testpassord';
        document.getElementById('Cfirmpassword').value = 'Testpassord';
        document.getElementById('Cuser').checked = false;
        document.getElementById('Cseller').checked = true;

        loginM.createUserFunc(data, false);
        let error = document.getElementById("Cerrormsg");
        expect(error.innerHTML).toBe("* Alle feltene må være utfylt!");
    });

    test("Produces error when passwords dont match", () => {
        document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');
        document.getElementById('Cusername').value = 'Testbruker21';
        document.getElementById('Cemail').value = 'ole@hotmail.com';
        document.getElementById('Cpassword').value = 'Testpassord';
        document.getElementById('Cfirmpassword').value = 'Testpassord1';
        document.getElementById('Cuser').checked = false;
        document.getElementById('Cseller').checked = true;

        loginM.createUserFunc(data, false);
        let error = document.getElementById("Cerrormsg");
        expect(error.innerHTML).toBe("* Passordene stemmer ikke!");
    });
});


describe("loginfunction tests", () => {

    document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');

    test("Checking if error is produced correctly with user no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = true;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = false;
        loginM.loginFunction(test, false);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with seller no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = true;
        document.getElementById('admin').checked = false;
        loginM.loginFunction(test, false);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with admin no username or pass", () => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('user').checked = false;
        document.getElementById('seller').checked = false;
        document.getElementById('admin').checked = true;
        loginM.loginFunction(test, false);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
});


