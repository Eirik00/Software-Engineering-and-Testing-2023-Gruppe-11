const tourId = window.location.hash.substring(1);
const tourList = JSON.parse(localStorage.getItem("tourList"));
const tourName = document.getElementById("tourName");
const tourDesc = document.getElementById("tourDesc");
const tourPrice = document.getElementById("tourPrice");
const tourImg = document.getElementById("tourImg");
let dispTour = "";



for(let i=0;i<tourList.length;i++){
    if(tourList[i].tourid == tourId){
        dispTour = tourList[i];
    }
}
tourName.innerHTML = dispTour.name;
tourDesc.innerHTML = dispTour.description;
tourPrice.innerHTML = dispTour.price + ".- NOK";

console.log(dispTour);