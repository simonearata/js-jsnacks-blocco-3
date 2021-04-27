$(function(){
  

  // array
  var arrNumeri = ['1', '2', '3', 'p', 'r', 'o'];
  var arrLettere = ['a', 'b', 'c', 'l'];
  var arrTot = [];

  var i = 0;

  while(arrNumeri[i] != undefined && arrLettere[i] != undefined) {
    arrTot.push(arrNumeri[i]);
    arrTot.push(arrLettere[i]);
    i++
  }

  console.log(arrTot)
})