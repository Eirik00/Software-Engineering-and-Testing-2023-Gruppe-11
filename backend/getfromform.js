var tourList = [];
if(JSON.parse(localStorage.getItem("tourList")) !== null){
    tourList = JSON.parse(localStorage.getItem("tourList"));
}

const bruker = JSON.parse(localStorage.getItem("login"));
const error = document.getElementById("errormsg");

function saveTour() {
    const name = document.getElementById("name").value;
    console.log(name);
    const description = document.getElementById("description").value;
    console.log(description);
    const price = document.getElementById("price").value;
    console.log(price);
    const accessibility = document.getElementById("accessibility").checked;
    console.log(accessibility);

    if (name != "" || description != "" || price != "") {
        tourList.push(createTour(bruker.username, name, description, price, "", accessibility));
        console.log("Hey")
        localStorage.setItem("tourList", JSON.stringify(tourList)); // oppdaterer otur array lista
    }
    else if(name = ""){
        error.innerHTML = "Tur mangler navn.";
    }
}

/*
Ikke ferdig
function saveUser() {
    const user = loginFunction();
    localStorage.setItem(user);
}*/

if (typeof window === "undefined") {
    module.exports = {saveTour: saveTour(), displayTours: displayTours()};
}