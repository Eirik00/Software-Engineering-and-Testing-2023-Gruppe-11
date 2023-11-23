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
});

function testData(cu, ce, cp, cf, cuser, cseller, data, create, admin = false){
    let body = fs.readFileSync("./Nettside/login/index.html", 'utf-8');
    const setLocalStorage = (id, data) => {
        window.mock.setItem(id, JSON.stringify(data));
    };
    document.body.innerHTML = body;
    document.getElementById(create+'username').value = cu;
    document.getElementById(create+'password').value = cp;
    document.getElementById(create+'user').checked = cuser;
    document.getElementById(create+'seller').checked = cseller;
    if(create === ""){
        document.getElementById("admin").checked = admin;
        loginM.loginFunction(test, false);
    }else{
        document.getElementById(create+'email').value = ce;
        document.getElementById(create+'firmpassword').value = cf;
        loginM.createUserFunc(data, false);
        setLocalStorage("brukere", data);
    }
    try{
        return JSON.parse(window.mock.getItem("brukere"))[0];
    }catch(err){
        return false;
    }
}


describe("Create user function tests", () => {
    beforeEach(() => {
        window.mock.clear();
        data = [];
    });
    let data = [];

    test("User is created correctly", () => {
        let user = testData("testbruker21", "ole@hotmail.com", "Testpassord", "Testpassord", true, false, data, "C");
        expect(user.email).toBe("ole@hotmail.com");
        expect(user.password).toBe("Testpassord");
        expect(user.typeUser).toBe("user");
        expect(user.username).toBe("testbruker21");
    });

    test("Seller is created correctly", () => {
        let user = testData("Testbruker211", "oleq@hotmail.com", "Testpassordd", "Testpassordd", false, true, data, "C");
        expect(user.email).toBe("oleq@hotmail.com");
        expect(user.password).toBe("Testpassordd");
        expect(user.typeUser).toBe("seller");
        expect(user.username).toBe("Testbruker211");
    });

    test("Produces error when missing a field", () => {
        testData("Testbruker21", null, "Testpassord", "Testpassord", false, true, data, "C");
        let error = document.getElementById("Cerrormsg");
        expect(error.innerHTML).toBe("* Alle feltene må være utfylt!");
    });

    test("Produces error when passwords dont match", () => {
        testData("Testbruker21", "ole@hotmail.com", "Testpassord1", "Testpassord", false, true, data, "C");
        let error = document.getElementById("Cerrormsg");
        expect(error.innerHTML).toBe("* Passordene stemmer ikke!");
    });
});


describe("loginfunction tests", () => {

    document.body.innerHTML = fs.readFileSync("./Nettside/login/index.html", 'utf-8');

    test("Checking if error is produced correctly with user no username or pass", () => {
        testData("", null, "", null, true, false, null, "", false);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with seller no username or pass", () => {
        testData("", null, "", null, false, true, null, "", false);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
    test("Checking if error is produced correctly with admin no username or pass", () => {
        testData("", null, "", null, false, false, null, "", true);
        let error = document.getElementById("errormsg");
        expect(error.innerHTML).toBe("* Brukernavn og/eller Passord må være utfylt!");
    })
});