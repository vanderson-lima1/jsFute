import {apiSportMonks} from '../js/sportMonks.js';

//let documento = $(document);
let datas =  apiSportMonks('/leagues','');
if(datas != null){
  //let leagues = [];
  let leagues = JSON.stringify(datas);
  console.log("data main: "+ datas);
  //leagues = JSON.stringify(datas["datas"]);
  console.log("leagues main: " + leagues);
  //$(response).each(function(index, item)
  //leagues.forEach(  item => {
  $.each(leagues, function (index) {
    //let card = item[index];
    //$('#cardTest').append(card);  
    console.log("league: " + this[index] + " " + index);
  })
}
else {
  console.log("data nulo aq: " + datas); };