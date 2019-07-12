import {apiSportMonks} from '../js/sportMonks.js';
let data = apiSportMonks('/leagues','');

if(data != null){
  let leagues = [];
  leagues = JSON.stringify(data);
  leagues.forEach(  item => {
    //let card = item[index];
    //$('#cardTest').append(card);  
    console.log("/league: " + item);
  });
}
else {
  console.log("teste: " + data != null); };
