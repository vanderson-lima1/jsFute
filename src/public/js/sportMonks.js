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
  //export async function apiSportMonks (action, params) { 
  export function apiSportMonks (callback,action, params) { 
  let urlSportMonks = 'https://soccer.sportmonks.com/api/v2.0';
  let urlAction = action;

  let urlParm = '';

  if(params != '') {
    //for(let i=0; i < params.size;i++){
    //  urlParm = urlParm + params[i];
    //}
    urlParm = params;
  };

  let urlTokenSportMonks = '?api_token=hvKskSL1XiEf3glA4QceYiPeFNwDpaOJzp8iitIpikDo3GEioubYVs4DWsEM';
  

//  documento.ready( function() {
//await $.ajax({
    $.ajax({
      url: urlSportMonks+urlAction+urlParm+urlTokenSportMonks,
      dataType: 'json',
      type: 'GET',
      success: (response) => {
        
        console.log("response: "+response);
        let datas = JSON.stringify(response);
        //return datas;
        callback();
        return datas;
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
          //return null;
          callback();
          return datas;
      }
    });
  //});
  };