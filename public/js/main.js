import {apiSportMonks} from '../js/sportMonks.js';
let data = apiSportMonks('/leagues','');
let leagues;

if(data != null){
  leagues = JSON.stringify(data);
  leagues.forEach(league => {
    let card = league;
    //$('#cardTest').append(card);  
    console.log("/league: " + league);
  });
}
else {
  console.log("teste: " + data != null); };
