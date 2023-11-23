let tourId = 0;
if(localStorage.getItem("tourId") !== null){
    tourId = localStorage.getItem("tourId");
}

// Denne fila lager tour objekter og håndterer de
class Tour {
    constructor(owner_id, name, description, price, img, accessibility) {
      this.owner_id = owner_id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.img = img;
      this.accessibility = accessibility;
      this.click = Math.floor(Math.random() * 10000);
      this.tourid = tourId;
    }
  }



// Denne funksjonen returnerer et nytt tour objekt
function createTour(owner_id, name, description, price, img, accessibility){
    tourId++;
    localStorage.setItem("tourId", tourId);
    return new Tour(owner_id, name, description, price, img, accessibility);
}
try{
    if (process.env.NODE_ENV === "test") {
        module.exports = {
            createTour: createTour
        };
    }
}catch(err){
    return;
}