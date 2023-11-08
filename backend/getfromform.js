var tourList = localStorage.getItem("tourList");
if(localStorage.getItem("tourList") === null){
    tourList = [];
}
if(!tourList){
    tourList = [];
    console.log("funker ikke")
}

function saveTour() {
    const name = document.getElementById("name").value;
    console.log(name);
    const description = document.getElementById("description").value;
    console.log(description);
    const price = document.getElementById("price").value;
    console.log(price);
    const accessibility = document.getElementById("accessibility").checked;
    console.log(accessibility);

    if (name && description && price) {

   
        localStorage.setItem(tourList.length, JSON.stringify(createTour(
            
            0, //placeholder for owner id
            name, //navnet av touren
            description, // description av touren
            price, // prisen av touren
            "placeholder-bilde.png", // tour bilde
            accessibility // tiljengelighet av touren
        )));
        tourList.push(tourList[tourList.length-1]+1); // øker tour array lista
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