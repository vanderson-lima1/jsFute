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

  let urlTokenSportMonks = '?api_token=GO6XQdYAuqHMAjoLyzoAIPFwZvqZyEesvPtS7pb7QZrb18o579P8IQ8GkSso';

  return $.ajax(
    {
      url: urlSportMonks+urlAction+urlParm+urlTokenSportMonks,
      dataType: 'json',
      type: 'GET',
      async: false,
      cache: false,
      timeout: 30000,
      success: (response) => {
        console.log("response success" + response);
        ajaxOK(response);
      },
      error: (response) => {
        ajaxNOK(response);
      }
    }
  );

  //$.when($.ajax(
 /*return $.when($.ajax(
    {
      url: urlSportMonks+urlAction+urlParm+urlTokenSportMonks,
      dataType: 'json',
      type: 'GET'
    }  
  )).then(ajaxOK(), ajaxNOK());
  */

  function ajaxOK(response){
    // .stringify transforma json em string
    //let data = JSON.stringify(response);

    // .parse transforma json em objeto
    //let data = JSON.parse(response);

    let data = response;
    console.log("response ajaxOK: "+data);
    // Save to localStorage
    localStorage.setItem("listleagues", JSON.stringify(data.data));
  };
  
  function ajaxNOK(response){
    console.log("response NOK ERRO!!!: "+ response);    
  };

//  documento.ready( function() {
//await $.ajax({
/** 
    $.ajax({
      url: urlSportMonks+urlAction+urlParm+urlTokenSportMonks,
      dataType: 'json',
      type: 'GET',
      success: (response) => {
        
        console.log("response: "+response);
        let datas = JSON.stringify(response);
        //return datas;
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
        })

        // Save to localStorage
        //localStorage.setItem('listaUF', JSON.stringify(response));

        // build options list
        //
        //$(response).each(function(index, item){
        //    var option = $(`<option value="${item.sigla}">${item.sigla}</option>`);
        //    $('#addressUF').append(option);
        //})
        //},
        //error: (response) => {
        //    console.error('Error', response);
        //    //return null;
        //    return datas;
        //}
    //});
  //});
*/  
  };