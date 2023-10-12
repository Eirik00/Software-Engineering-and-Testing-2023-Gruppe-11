// Admin login funksjon
function loginAdmin(username, password) {
    console.log("admin: " + username + " " + password);
    return "admin " + username + " " + password;
}
// Bruker login funksjon
function loginUser(username, password) {
    console.log("user: " + username + " " + password);
    return "user " + username + " " + password;
}

function loginSeller(username, password) {
    console.log("seller: " + username + " " + password);
    return "seller " + username + " " + password;
}

// Hoved login funksjonen
function loginFunction() {
    var username = document.getElementById("username");     // Henter ut html elementet med id=username
    var password = document.getElementById("password");     // Henter ut html elementet med id=password
    var choice = document.getElementsByName("userChoice");  // Henter ut html elementer med NAVNET=userChoice
    
    // Den må kjøre en loop igjennom choice, som er en liste, for å sjekke om hvilken som har attributten "checked"
    for (let i = 0; i< choice.length; i++){
        if(choice[i].checked){
            if(choice[i].value == "1"){         // Her ser den etter hvilken value elementet med "checked" har
                loginUser(username.value, password.value);  // om det er 1 så er det bruker login
            }
            else if (choice[i].value == "2"){
                loginSeller(username.value, password.value);
            }
            else{
                loginAdmin(username.value, password.value); // ellers er det admin
            }
        }
    }
}


// Eksportering til test
module.exports = {loginFunction: loginFunction,loginUser: loginUser,loginSeller: loginSeller, loginAdmin: loginAdmin};