import {apiSportMonks} from '../js/sportMonks.js';

let storage = localStorage.getItem("listleagues");
//let documento = $(document);
let datas;
if(storage == null)
  apiSportMonks('/leagues','');

storage = localStorage.getItem("listleagues");

datas = {data: JSON.parse(storage)};

console.log("main js datas: "+datas);
console.log("main js datas stringify: "+ JSON.stringify(datas));
if(datas != null){
  //let leagues = [];
  let leagues = datas.data;
  console.log("data main: "+ datas);
  //leagues = JSON.stringify(datas["datas"]);
  console.log("leagues main: " + leagues);
  //$(response).each(function(index, item)
  //$.each(leagues, function (index) {
  let colsCards = document.querySelector("#colsCards");
  leagues.forEach(  item => {  
    //let card = item[index];
    //$('#cardTest').append(card);  
    console.log("league: " + item.id + " name: " + item.name);

    let cardLeague = document.createElement("div");
    cardLeague.classList.add("card","c-card-league");

    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    if(item.logo_path == null)
      imgCard.src = "#";
    else
      imgCard.src = item.logo_path;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.name;
    
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "Soccer";

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let textMuted = document.createElement("small");
    textMuted.classList.add("card-footer");
    textMuted.textContent = "";
  
    cardFooter.appendChild(textMuted);
    
    cardBody.appendChild(cardTitle); 
    cardBody.appendChild(cardText); 

    cardLeague.appendChild(imgCard);
    cardLeague.appendChild(cardBody);
    //cardLeague.appendChild(cardFooter);
    
    colsCards.appendChild(cardLeague);

  });
}
else {
  console.log("data nulo aq: " + datas); };