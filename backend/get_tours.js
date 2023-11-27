const newTours = document.getElementById("Ntours");
const newToursList = tourList.slice(tourList.length-4, tourList.length+4).reverse();
const popTours = document.getElementById("Ptours");
const popToursList = tourList.sort(function(a, b){
    return a.click - b.click;
}).slice(tourList.length-4, tourList.length+4);
const allTours = document.getElementById("Atours");
const allToursList = tourList;

const pageSlider = document.getElementById("pageDiv");


// New Tours
for(let i=0;i<newToursList.length;i++){
    let newAtag = document.createElement("a");
    newAtag.href = "tour/index.html#"+newToursList[i].tourid;
    newAtag.style = "text-decoration: none; color: black;";
    newTours.appendChild(newAtag);
    
    let newDiv = document.createElement("div");
    newDiv.classList.add("tour");
    newAtag.appendChild(newDiv);
    
    let newName = document.createElement("p");
    newName.classList.add("name");
    newName.innerHTML = newToursList[i].name;
    newDiv.appendChild(newName);
    
    let newDesc = document.createElement("p");
    newDesc.classList.add("desc");
    if(newToursList[i].description.length > 250){
        newDesc.innerHTML = newToursList[i].description.slice(0, 247) + "...";
    }else{
        newDesc.innerHTML = newToursList[i].description;
    }
    newDiv.appendChild(newDesc);
    
    let newPrice = document.createElement("p");
    newPrice.classList.add("price");
    newPrice.innerHTML = "<b>Price: " + newToursList[i].price + " NOK</b>"
    newDiv.appendChild(newPrice);
    
    if(newToursList[i].accessibility == true){
        newName.innerHTML = newName.innerHTML + " <i class='fa fa-wheelchair'></i>";
    }
}

// Popular Tours
for(let i=0;i<popToursList.length;i++){
    let newAtag = document.createElement("a");
    newAtag.href = "tour/index.html#"+popToursList[i].tourid;
    newAtag.style = "text-decoration: none; color: black;";
    popTours.appendChild(newAtag);
    
    let newDiv = document.createElement("div");
    newDiv.classList.add("tour");
    newAtag.appendChild(newDiv);
    
    let newName = document.createElement("p");
    newName.classList.add("name");
    newName.innerHTML = popToursList[i].name;
    newDiv.appendChild(newName);
    
    let newDesc = document.createElement("p");
    newDesc.classList.add("desc");
    if(popToursList[i].description.length > 250){
        newDesc.innerHTML = popToursList[i].description.slice(0, 247) + "...";
    }else{
        newDesc.innerHTML = popToursList[i].description;
    }
    newDiv.appendChild(newDesc);
    
    let newPrice = document.createElement("p");
    newPrice.classList.add("price");
    newPrice.innerHTML = "<b>Price: " + popToursList[i].price + " NOK</b>"
    newDiv.appendChild(newPrice);
    
    if(popToursList[i].accessibility == true){
        newName.innerHTML = newName.innerHTML + " <i class='fa fa-wheelchair'></i>";
    }
}


// All Tours
const pages = Math.ceil(allToursList.length/4);

function updatePage(pageNr){
    while(allTours.firstChild){
        allTours.removeChild(allTours.lastChild);
    }
    let loopNum = 0;
    if(allToursList.length < pageNr*4){
        loopNum = allToursList.length - (pageNr*4)+4;
    }else{
        loopNum = pageNr*4;
    }
    for(let i=0;i<loopNum;i++){
        let newAtag = document.createElement("a");
        newAtag.href = "tour/index.html#"+allToursList[i].tourid;
        newAtag.style = "text-decoration: none; color: black;";
        allTours.appendChild(newAtag);
        
        let newDiv = document.createElement("div");
        newDiv.classList.add("tour");
        newAtag.appendChild(newDiv);

        let newName = document.createElement("p");
        newName.classList.add("name");
        newName.innerHTML = allToursList[i].name;
        newDiv.appendChild(newName);

        let newDesc = document.createElement("p");
        newDesc.classList.add("desc");
        if(allToursList[i].description.length > 250){
            newDesc.innerHTML = allToursList[i].description.slice(0, 247) + "...";
        }else{
            newDesc.innerHTML = allToursList[i].description;
        }
        newDiv.appendChild(newDesc);

        let newPrice = document.createElement("p");
        newPrice.classList.add("price");
        newPrice.innerHTML = "<b>Price: " + allToursList[i].price + " NOK</b>"
        newDiv.appendChild(newPrice);

        if(allToursList[i].accessibility == true){
            newName.innerHTML = newName.innerHTML + " <i class='fa fa-wheelchair'></i>";
        }
    }
}

for(let i=0;i<pages;i++){
    const newDiv = document.createElement("p");
    newDiv.innerHTML = "<a href='javascript:updatePage("+(i+1)+")'>"+(i+1)+"</a>";
    pageSlider.appendChild(newDiv);
}
updatePage(1);