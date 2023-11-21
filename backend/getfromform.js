function initializeTour() {
    var tourList = [];
    if (JSON.parse(localStorage.getItem("tourList")) !== null) {
        tourList = JSON.parse(localStorage.getItem("tourList"));
    }

    if (localStorage.getItem("login") === null) {
        window.location.href = "../login/index.html";
    }
};

function saveTour(doLocalStorage = true) {
    const bruker = JSON.parse(localStorage.getItem("login"));
    const error = document.getElementById("errormsg");

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const accessibility = document.getElementById("accessibility").checked;

    if (name != "" && description != "" && price != "") {
        error.innerHTML = "* Tur opprettet"
        if (doLocalStorage) {
            tourList.push(createTour(bruker.username, name, description, price, "", accessibility));
            console.log("Tur opprettet")
            localStorage.setItem("tourList", JSON.stringify(tourList)); // oppdaterer tur array lista
        }
    }else{
        error.innerHTML = "* Du må fylle ut alle feltene!"
    }
}
if (process.env.NODE_ENV !== "test") {
    initializeTour();
}

/*
Ikke ferdig
function saveUser() {
    const user = loginFunction();
    localStorage.setItem(user);
}*/

if (process.env.NODE_ENV === "test") {
    module.exports = {saveTour: saveTour};
}