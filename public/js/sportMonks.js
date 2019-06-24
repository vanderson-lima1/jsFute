// GET request for remote image
/*
var axios = require("axios");

axios({
  method: 'get',
  url: 'https://soccer.sportmonks.com/api/v2.0/leagues',

  params: {
    api_token: 'XHwSzUevoeWCREsXO44vaKTojHzrGIS4UtOoMA84YIyYAlgrDMT6BsD3FFU0',
  }

})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(erro => {
    console.log(error)
  });*/
export function apiSportMonks (action, params) { 
  let urlSportMonks = 'https://soccer.sportmonks.com/api/v2.0';
  let urlAction = action;

  let urlParm = '';

  if(params != '') {
    //for(let i=0; i < params.size;i++){
    //  urlParm = urlParm + params[i];
    //}
    urlParm = params;
  };

  let urlTokenSportMonks = '?api_token=EXvm21l8AzmE2K8LmbexE7PRr4OqforQDO8j1HiacYXS2uG4OqQLgQrVifV0';

  $.ajax({
    url: urlSportMonks+urlAction+urlParm+urlTokenSportMonks,
    dataType: 'json',
    type: 'GET',
    success: (response) => {
      
      console.log(response);
      return response;
      // order UF.
      /*
      response.sort(function(a, b){
          if ( a.sigla < b.sigla ){
              return -1;
          }
          if ( a.sigla > b.sigla ){
              return 1;
          }
          return 0;
      })*/

      // Save to localStorage
      //localStorage.setItem('listaUF', JSON.stringify(response));

      // build options list
      /*
      $(response).each(function(index, item){
          var option = $(`<option value="${item.sigla}">${item.sigla}</option>`);
          $('#addressUF').append(option);
      })*/
    },
    error: (response) => {
        console.error('Error', response);
        return null;
    }
  });
};
