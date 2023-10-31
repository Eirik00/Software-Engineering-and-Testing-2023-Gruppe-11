// Denne fila lager tour objekter og håndterer de
class Tour {
    constructor(id, owner_id, name, description, price, img, accessibility) {
      this.id = id;  
      this.owner_id = owner_id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.img = img;
      this.accsesibility = accsesibility;
    }
  }



// Denne funksjonen returnerer et nytt tour objekt
function createTour(id, owner_id, name, description, price, img, accessibility){
    return new Tour(id, owner_id, name, description, price, img, accessibility);
}