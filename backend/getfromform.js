

function saveTour() {
    const name = document.getElementById("name").value;
    console.log(name);
    const description = document.getElementById("description").value;
    console.log(description);
    const price = document.getElementById("price").value;
    console.log(price);

    var newTour = new Tour(1, 2, name, description, price, "placeholder-url", true);


   
    if (name && description && price) {
        const key = `tour_${Date.now()}`;
        const newTour = new Tour(1, 2, name, description, price, "placeholder-url", true);;

        localStorage.setItem(key, JSON.stringify(newTour));
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