/*
* File: app.js
* Author: Bacskó Georgina
* Copyright: 2022, Bacskó Georgina
* Group: Szoft 1/1 E
* Date: 2022-03-30
* Github: https://github.com/Gina95
* Licenc: GNU GPL
*/

var szamitKaloria = (zsir, tömeg) =>{
    return 370+21.6*(1-zsir)*tömeg;

}

$('#szamitGomb').on('click',() => {
 let a = Number ($('#testzsirszazalek').val());
 let b = Number ($('#testtomeg').val());

 let kaloriaSzuk = szamitKaloria(a,b);

 console.log(kaloriaSzuk)

 $('#kaloriszuk_doboz').fadeIn(400);
 $('#kaloriaSzuk').val(kaloriaSzuk.toFixed(2));

});

