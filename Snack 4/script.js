$(function(){
  
  var randomLetter = 'abcdefghijklmnopqrstuvwxyz'


  // squadra di basket
  var arrSquadra = [

    {
      giocatore: 'Francesco',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomTiri(0, 100)
    },

    {
      giocatore: 'Gino',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomTiri(0, 100)
    },

    {
      giocatore: 'Luca',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomTiri(0, 100)
    },

    {
      giocatore: 'Peppe',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomTiri(0, 100)
    }
  ];
  

  // funzioni
  function randomNumLett(){
    // creo un ciclo che aggiunge un numero e una lettere
    for(var i = 0; i < 4; i++ ){
      var codiceGiocatore = [];
      codiceGiocatore.push(Math.floor(Math.random() * 10) + 1);
      codiceGiocatore.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
    }
    
    return codiceGiocatore.join('');
  }
  
  // funzione che crea numero random per media punti
  function randomNum(min, max){
    var punteggio = [];
    punteggio.push(Math.floor(Math.random() * (max - min + 1)) + min);

    return punteggio
  }

  // funzione che crea numero random per punti da tre
  function randomTiri(min, max){
    var tiriTre = [];
    tiriTre.push(Math.floor(Math.random() * (max - min + 1)) + min);

    return tiriTre
  }

  console.log(arrSquadra)
})