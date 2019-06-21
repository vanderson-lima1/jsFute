import {apiSportMonks} from '../jss/sportMonks.js';
let data = apiSportMonks('/leagues','');
let teamns;
if(data != null){
  teamns = data;
  teamns.forEach(team => {
    let card = team;
    //$('#cardTest').append(card);  
    console.log('/team: ' + team);
  });
};
