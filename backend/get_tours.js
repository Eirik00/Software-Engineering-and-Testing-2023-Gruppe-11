//predefined tours

var allTours = [];
            allTours = JSON.parse(localStorage.getItem("tourList"));
            allTours.reverse(); //slik at de nyligst opprettede turene vises, fremfor de eldste

            const displayNames = ["name1", "name2", "name3", "name4"];
            const displayDesc = ["desc1", "desc2", "desc3", "desc4"];
            const displayPrices = ["price1", "price2", "price3", "price4"];

            for (let i = 0; i < localStorage.getItem("tourList").length; i++){
                let tempName = document.getElementById(displayNames[i]);
                tempName.innerHTML = allTours[i].name;

                let tempDesc = document.getElementById(displayDesc[i]);
                tempDesc.innerHTML = allTours[i].description;

                let tempPrice = document.getElementById(displayPrices[i]);
                tempPrice.innerHTML = "pris: " + allTours[i].price;
            }


            console.log("funker");
