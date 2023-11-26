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
    let ad = document.createElement("a");
    ad.href = "tour/index.html#"+newToursList[i].tourid;
    ad.style = "text-decoration: none; color: black;";
    newTours.appendChild(ad);
    
    let nw = document.createElement("div");
    nw.classList.add("tour");
    ad.appendChild(nw);
    
    let nm = document.createElement("p");
    nm.classList.add("name");
    nm.innerHTML = newToursList[i].name;
    nw.appendChild(nm);
    
    let nd = document.createElement("p");
    nd.classList.add("desc");
    if(newToursList[i].description.length > 250){
        nd.innerHTML = newToursList[i].description.slice(0, 247) + "...";
    }else{
        nd.innerHTML = newToursList[i].description;
    }
    nw.appendChild(nd);
    
    let np = document.createElement("p");
    np.classList.add("price");
    np.innerHTML = "<b>Price: " + newToursList[i].price + " NOK</b>"
    nw.appendChild(np);
    
    if(newToursList[i].accessibility == true){
        nm.innerHTML = nm.innerHTML + " <i class='fa fa-wheelchair'></i>";
    }
}

// Popular Tours
for(let i=0;i<popToursList.length;i++){
    let ad = document.createElement("a");
    ad.href = "tour/index.html#"+popToursList[i].tourid;
    ad.style = "text-decoration: none; color: black;";
    popTours.appendChild(ad);
    
    let nw = document.createElement("div");
    nw.classList.add("tour");
    ad.appendChild(nw);
    
    let nm = document.createElement("p");
    nm.classList.add("name");
    nm.innerHTML = popToursList[i].name;
    nw.appendChild(nm);
    
    let nd = document.createElement("p");
    nd.classList.add("desc");
    if(popToursList[i].description.length > 250){
        nd.innerHTML = popToursList[i].description.slice(0, 247) + "...";
    }else{
        nd.innerHTML = popToursList[i].description;
    }
    nw.appendChild(nd);
    
    let np = document.createElement("p");
    np.classList.add("price");
    np.innerHTML = "<b>Price: " + popToursList[i].price + " NOK</b>"
    nw.appendChild(np);
    
    if(popToursList[i].accessibility == true){
        nm.innerHTML = nm.innerHTML + " <i class='fa fa-wheelchair'></i>";
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
        let ad = document.createElement("a");
        ad.href = "tour/index.html#"+allToursList[i].tourid;
        ad.style = "text-decoration: none; color: black;";
        allTours.appendChild(ad);
        
        let nw = document.createElement("div");
        nw.classList.add("tour");
        ad.appendChild(nw);

        let nm = document.createElement("p");
        nm.classList.add("name");
        nm.innerHTML = allToursList[i].name;
        nw.appendChild(nm);

        let nd = document.createElement("p");
        nd.classList.add("desc");
        if(allToursList[i].description.length > 250){
            nd.innerHTML = allToursList[i].description.slice(0, 247) + "...";
        }else{
            nd.innerHTML = allToursList[i].description;
        }
        nw.appendChild(nd);

        let np = document.createElement("p");
        np.classList.add("price");
        np.innerHTML = "<b>Price: " + allToursList[i].price + " NOK</b>"
        nw.appendChild(np);

        if(allToursList[i].accessibility == true){
            nm.innerHTML = nm.innerHTML + " <i class='fa fa-wheelchair'></i>";
        }
    }
}

for(let i=0;i<pages;i++){
    const nw = document.createElement("p");
    nw.innerHTML = "<a href='javascript:updatePage("+(i+1)+")'>"+(i+1)+"</a>";
    pageSlider.appendChild(nw);
}
updatePage(1);