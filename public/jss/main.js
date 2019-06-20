let data = apiSportMonks('/teams/season/',1);
let teamns;
if(data != null){
  teamns = data;
}

teamns.forEach(team => {
  let card = team;
  //$('#cardTest').append(card);  
  console.log('team: ' + team);
});
