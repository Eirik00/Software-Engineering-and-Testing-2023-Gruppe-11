var preset = [
//////////////////[Predefined users]///////////////////// [syntax]
{                                                      // {
    username: "AverageJoe2",                           //   username: "{UserName}",
    password: "AvJo2",                                 //   password: "{password}",
    email:    "JoeDoe@email.com",                      //   email:       "{email}",
    typeUser: "user"                                   //   typeUser: "{user, seller or admin}"
},{                                                    // }
    username: "Sellerman",                             //
    password: "soldTrip123",                           //
    email:    "bestseller@business.com",               //
    typeUser: "seller"                                 //
},{                                                    //
    username: "adminguy23",                            //
    password: "adminPass123",                          //
    email:    "adminguy@company.com",                  //
    typeUser: "admin"                                  //
}                                                      //
/////////////////////////////////////////////////////////

];

const users = "preset"
const loggedIn = "login"

function localStorageSetter(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

if(localStorage.getItem("preset") !== null){
    preset = JSON.parse(localStorage.getItem("preset"));
}

// Denne prosessen kan være tungvindt siden dette må gjøres via javascript. Den er heller ikke sikker men det eneste måten vi ser mulig foreløpig.
// Vi kunne ha gjort prosessen raskere og mer sikkert ved hjelp av php og en database, men dette krever en webserver og er gir derfor ekstra krav
// som ikke er nødvendig for oppgaven.

// Admin login funksjon
function loginAdmin(username, password) {
    return "admin " + username + " " + password;
}
// Seller login funksjon
function loginSeller(username, password) {
    return "seller " + username + " " + password;
}
// Bruker login funksjon
function loginUser(username, password) {
    return "user " + username + " " + password;
}



// Hoved login funksjonen
function loginFunction(userList, writeToLocalStorage = true) {
    const error = document.getElementById("errormsg");
    const username = document.getElementById("username");     // Henter ut html elementet med id=username
    const password = document.getElementById("password");     // Henter ut html elementet med id=password
    const choice = document.getElementsByName("userChoice");  // Henter ut html elementer med NAVNET=userChoice
    
    if(username.value == "" || password.value == ""){
        error.innerHTML = "* Brukernavn og/eller Passord må være utfylt!";
    }else{
        let fUser;
        for(let i=0;i<userList.length;i++){
            if(userList[i].username == username.value){
                if(userList[i].password == password.value){
                    fUser = userList[i];
                }else{
                    error.innerHTML = "* Feil brukernavn eller passord!";
                }
                break;
            }
        }
        if(fUser === undefined){
            error.innerHTML = "* Feil brukernavn eller passord!";
        }else{
            // Den må kjøre en loop igjennom choice, som er en liste, for å sjekke om hvilken som har attributten "checked"
            for (let i = 0; i< choice.length; i++){
                if(choice[i].checked){
                    const loggedinUser = {
                        username: fUser.username,
                        password: fUser.password,
                        email:    fUser.email,
                        typeUser: fUser.typeUser
                    };
                    if(choice[i].value == "1"){         // Her ser den etter hvilken value elementet med "checked" har
                        loginUser(username.value, password.value);  // om det er 1 så er det bruker login
                        if(writeToLocalStorage) {
                            loggedinUser.typeUser = "user";
                            localStorageSetter(loggedIn, loggedinUser);
                            window.location.href = "../index.html";
                        }
                    }
                    else if (choice[i].value == "2"){
                        loginSeller(username.value, password.value);
                        
                        if(loggedinUser.typeUser == "user"){
                            error.innerHTML = "* Du er ikke en seller";
                        }else{
                            if (writeToLocalStorage) {
                                loggedinUser.typeUser = "seller";
                                localStorageSetter(loggedIn, loggedinUser);
                                window.location.href = "../index.html";
                            }
                        }
                    }
                    else{
                        loginAdmin(username.value, password.value,); // ellers er det admin
                        
                        if(loggedinUser.typeUser != "admin"){
                            error.innerHTML = "* Du er ikke en administrator!";
                        }else{
                            if (writeToLocalStorage) {
                                localStorageSetter(loggedIn, loggedinUser);
                                window.location.href = "../index.html";
                            }
                        }
                    }
                }
            }
        }
    }
}


// For å "øke" sikkerheten så må administrator brukere bli laget manuelt på server, i dette tilfellet så må de bli lagt inn i userList i koden
// Ingen skal kunne lage en administrator bruker igjennom eksterne kilder.

function createUser(u, p, e, userList, writeToLocalStorage = true){
    const nyBruker = {
        username: u,
        password: p, 
        email:    e,
        typeUser: "user"
    };
    for(let i=0;i<userList.length;i++){
        if(userList[i].username == u){
            document.getElementById("Cerrormsg").innerHTML = "* Denne brukeren finnes allerede!";
            return;
        }
    }
    if (writeToLocalStorage) {
        userList.push(nyBruker);
        localStorageSetter(users, userList);
        location.reload();
    }
}

function createSeller(u, p, e, userList, writeToLocalStorage = true){
    const nyBruker = {
        username: u,
        password: p, 
        email:    e,
        typeUser: "seller"
    };
    for(let i=0;i<userList.length;i++){
        if(userList[i].username == u){
            document.getElementById("Cerrormsg").innerHTML = "* Denne brukeren finnes allerede!";
            return;
        }
    }
    if (writeToLocalStorage) {
        userList.push(nyBruker);
        localStorageSetter(users, userList);
        location.reload();
    }
}

function createUserFunc(userList, writeToLocalStorage = true) {
    const error = document.getElementById("Cerrormsg");
    const username = document.getElementById("Cusername");
    const email = document.getElementById("Cemail");
    const pass = document.getElementById("Cpassword");
    const choice = document.getElementsByName("CuserChoice");
    
    if(username.value == "" || email.value == "" || pass.value == ""){
        error.innerHTML = "* Alle feltene må være utfylt!";
    }else{
        if(pass.value != document.getElementById("Cfirmpassword").value){
            error.innerHTML = "* Passordene stemmer ikke!";
        }else{
            for(let i=0; i<choice.length; i++){
                let c = choice[i];
                if(c.checked){
                    if(c.value == "1"){
                        createUser(username.value, pass.value, email.value, userList, writeToLocalStorage);
                    }else{
                        createSeller(username.value, pass.value, email.value, userList, writeToLocalStorage);
                    }
                }
            }
        }
    }
}


module.exports = {
    localStorageSetter: localStorageSetter,
    loginUser: loginUser,
    loginSeller: loginSeller,
    loginAdmin: loginAdmin,
    loginFunction: loginFunction,
    createUserFunc: createUserFunc
};