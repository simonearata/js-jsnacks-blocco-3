$(function(){
 
  var arrAlfabeto = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z"];
  var a = parseInt(prompt('inserisci un numero fra 0 e ' + (arrAlfabeto.length)));
  var b = parseInt(prompt('inserisci un numero maggiore del precedente fra ' + (a + 1) + ' e ' + (arrAlfabeto.length)));

  if(a > b){
    alert('Il secondo numero deve essere maggiore');
  }

  console.log(snack5(arrAlfabeto, a, b));

  // funzione
  function snack5 (arr, a, b){
    var arrReturn = [];

    for (var i in arrAlfabeto){5
      if(i >= a && i <= b) {
        arrReturn.push(arr[i]);
      }
    }

    return arrReturn;
    
  }
})