import {loginFunction} from "./login";

function saveTour() {
    const title = document.getElementById("title").value;
    console.log(title);
    const description = document.getElementById("description").value;
    console.log(description);

    if (title && description) {
        const key = `tour_${Date.now()}`;
        const tourData = {
            title: title,
            description: description
        };

        localStorage.setItem(key, JSON.stringify(tourData));
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