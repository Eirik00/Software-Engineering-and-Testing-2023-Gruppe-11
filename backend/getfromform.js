try{// Sjekker om det eksisterer en tourlist fra før av
    var tourList = localStorage.getItem("tourList");
}catch{// Om ikke så lager vi en ny en og setter den til local storage
    var tourList = [];
    localStorage.setItem("tourList", tourList);
}

function saveTour() {
    const name = document.getElementById("name").value;
    console.log(name);
    const description = document.getElementById("description").value;
    console.log(description);
    const price = document.getElementById("price").value;
    console.log(price);

    if (name && description && price) {
        localStorage.setItem(key, JSON.stringify(createTour(
            tourList.length, // Denne returnerer lengden av arrayen og setter den lik tour id. Siden tour
            0, //placeholder for owner id
            name, //navnet av touren
            description, // description av touren
            price, // prisen av touren
            "placeholder-bilde.png", // tour bilde
            true // tiljengelighet av touren
        )));
        tourList.push(tourlist[tourList.length-1]+1); // øker tour array lista
        localStorage.setItem("tourList", tourList); // oppdaterer otur array lista
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