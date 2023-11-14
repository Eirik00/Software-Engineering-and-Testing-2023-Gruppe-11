//predefined tours
            const allTours = JSON.parse(localStorage.getItem("tourList"));
            allTours.reverse(); //slik at de nyligst opprettede turene vises, fremfor de eldste

            const displayNames = ["name1", "name2", "name3", "name4"];
            const displayDesc = ["desc1", "desc2", "desc3", "desc4"];
            const displayPrices = ["price1", "price2", "price3", "price4"];
            const displayAccessibility = ["accessibility1", "accessibility2", "accessibility3", "accessibility4"];

            for (let i = 0; i < displayNames.length; i++){
                let tempName = document.getElementById(displayNames[i]);
                tempName.innerHTML = allTours[i].name;

                let tempDesc = document.getElementById(displayDesc[i]);
                tempDesc.innerHTML = allTours[i].description;

                let tempPrice = document.getElementById(displayPrices[i]);
                tempPrice.innerHTML = "pris: " + allTours[i].price + ".- kr";

                let tempAccessibility = document.getElementById(displayAccessibility[i]);
              
                if (allTours[i].accessibility == true){
                    tempAccessibility.innerHTML = "Handicap-Tilrettelagt: Ja"
                }
                else {tempAccessibility.innerHTML = "Handicap-Tilrettelagt: Nei"}
            }

            function displayAllTours(tour){
                let newdiv = document.createElement("div");
                newdiv.classList.add("tour");

                let newdivName = document.createElement("h2");
                newdivName.classList.add("name");
                newdivName.innerHTML = tour.name;
                newdiv.appendChild(newdivName);

                let newdivDesc = document.createElement("p");
                newdivDesc.classList.add("desc");
                newdivDesc.innerHTML = tour.description;
                newdiv.appendChild(newdivDesc);

                let newdivPrice = document.createElement("p");
                newdivPrice.classList.add("price");
                newdivPrice.innerHTML = "Pris: " + tour.price + ".- kr";
                newdiv.appendChild(newdivPrice);

                let newdivAcc = document.createElement("p");
                newdivAcc.classList.add("accessibility");
                if (tour.accessibility == true){
                    newdivAcc.innerHTML = "Handicap-Tilrettelagt: Ja"
                }
                else {newdivAcc.innerHTML = "Handicap-Tilrettelagt: Nei"}
                newdiv.appendChild(newdivAcc);

                
                let allToursdiv = document.getElementById("Alltours");
                allToursdiv.appendChild(newdiv);
            }

            
            for (let i = 0; i < allTours.length; i++) {
                displayAllTours(allTours[i]);
            }
            


            console.log("funker");
