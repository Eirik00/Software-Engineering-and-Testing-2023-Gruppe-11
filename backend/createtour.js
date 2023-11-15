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
    }
  }



// Denne funksjonen returnerer et nytt tour objekt
function createTour(owner_id, name, description, price, img, accessibility){
    return new Tour(owner_id, name, description, price, img, accessibility);
}