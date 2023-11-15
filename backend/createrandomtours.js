var userList = [
//////////////////[Predefined users]///////////////////// [syntax]
{                                                      // {
    username: "AverageJoe2",                           //   username: "{UserName}",
    password: "AvJo2",                                 //   password: "{password}",
    email:    "JoeDoe@email.com",                      //   email:       "{email}",
    typeUser: "user"                                   //   typeUser: "{user, seller or admin}"
},{                                                    // }
    username: "Sellerman",                             //
    password: "soldTrip123",                           //
    email:    "bestseller@business.com",               //
    typeUser: "seller"                                 //
},{                                                    //
    username: "adminguy23",                            //
    password: "adminPass123",                          //
    email:    "adminguy@company.com",                  //
    typeUser: "admin"                                  //
},                                                      //
/////////////////////////////////////////////////////////

    
// [Ekstra selgere for tilfeldig tour generasjonen] //
{
    username: "GuideQuest",
    password: "Gu1dQst",
    email:    "feedback@guidequest.com",
    typeUser: "seller",
},{
    username: "ExploreMasters",
    password: "exploreMstr12",
    email:    "ExploreMasters@gmail.com",
    typeUser: "seller",
},{
    username: "RoamExperts",
    password: "icanttype23",
    email:    "George@rmExperts.no",
    typeUser: "seller",
},{
    username: "VoyageExperts",
    password: "Ahoy56",
    email:    "VoyageExp@hotmail.com",
    typeUser: "seller",
}
];

if(localStorage.getItem("userList") !== null){
    userList = JSON.parse(localStorage.getItem("userList"));
}
let tourList = [];
if(localStorage.getItem("tourList") !== null){
    tourList = JSON.parse(localStorage.getItem("tourList"));
}
const selgere = [];
for(let i=0;i<userList.length;i++){
    if(userList[i].typeUser == "seller"){
        selgere.push(userList[i]);   
    }
}
if(tourList<4){
    tourList.push(createTour(selgere[Math.round(Math.random() * selgere.length)],"Excitement Tours", "Welcome to Excitement Tours, where adventure knows no bounds! Immerse yourself in a world of thrilling experiences and unforgettable moments. Our carefully crafted tours are designed to ignite your sense of wonder and leave you breathless with excitement. From heart-pounding outdoor escapades to cultural discoveries that will captivate your soul, Excitement Tours promises an adrenaline-fueled journey like no other. Join us as we redefine adventure and create memories that will last a lifetime. Your next extraordinary adventure awaits with Excitement Tours!", 500, "place-holder.png", true));
    tourList.push(createTour(selgere[Math.round(Math.random() * selgere.length)], "Paragliding: Sky Tour", "Soar to new heights on our exhilarating paragliding adventure! Experience the thrill of free flight as you glide through the sky with panoramic views of stunning landscapes below. Our expert guides will ensure a safe and unforgettable journey, taking you on a gravity-defying escapade. Whether you're a seasoned paraglider or a first-timer, join us for an adrenaline-pumping experience that will leave you with memories to last a lifetime.", 200, "place-holder.png", false));
    tourList.push(createTour(selgere[Math.round(Math.random() * selgere.length)], "Mountain Expedition", "Embark on an awe-inspiring mountain expedition that challenges both body and spirit. Our 'Mountain Expedition' tour is designed for adventurers seeking the thrill of conquering majestic peaks and experiencing breathtaking vistas. Traverse rugged terrain, cross alpine meadows, and summit towering peaks with the guidance of our seasoned mountaineering experts. Whether you're a seasoned climber or a novice, our carefully curated journey promises an unforgettable experience, filled with camaraderie, achievement, and the raw beauty of nature. Join us for the ultimate mountain adventure that will leave you with a sense of accomplishment and a lifetime of memories.", 150, "place-holder.png", false));
    tourList.push(createTour(selgere[Math.round(Math.random() * selgere.length)],"Culinary Delights", "Embark on a mouthwatering journey that will tantalize your taste buds and awaken your culinary senses. Our 'Culinary Delights' tour is a gastronomic adventure through the heart of diverse flavors, where each dish tells a story of local traditions and cultural richness. Immerse yourself in the vibrant tapestry of culinary experiences as our expert guides lead you through bustling markets, hidden gems, and renowned eateries. From savory street food to exquisite fine dining, savor the essence of each bite and discover the unique ingredients that make each dish extraordinary. Join us on this delectable exploration, where every meal is a celebration of flavor and every moment is a feast for the senses.", 500, "place-holder.png", true));
    tourList.push(createTour(selgere[Math.round(Math.random() * selgere.length)],"Historical Wonders", "Step back in time and unlock the mysteries of ancient civilizations on our 'Historical Wonders' tour. Immerse yourself in the stories told by ancient ruins, architectural marvels, and historical landmarks that have withstood the test of time. Our expert guides will lead you through the rich tapestry of history, providing insights and anecdotes that bring each site to life. From the grandeur of ancient empires to the cultural nuances of bygone eras, this tour promises a fascinating exploration of our shared human heritage. Join us on this journey through time, where every step uncovers a new layer of history and every moment is a connection to the past.", 100, "place-holder.png", true));
}