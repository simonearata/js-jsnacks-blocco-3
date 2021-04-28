$(function(){

  // squadra di basket
  var arrSquadra = [

    {
      giocatore: 'Francesco',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomNum(0, 100)
    },

    {
      giocatore: 'Gino',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomNum(0, 100)
    },

    {
      giocatore: 'Luca',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomNum(0, 100)
    },

    {
      giocatore: 'Peppe',
      codice_giocatore: randomNumLett(),
      media_punti: randomNum(0, 50),
      tiri_3: randomNum(0, 100)
    }
  ];
  

  // funzioni
  function randomNumLett(){
    var codiceGiocatore = [];
    var randomLetter = 'ABCDEFGHAILMNOPQRSTUVZ';
    // creo un ciclo che aggiunge un numero e una lettere
    while(codiceGiocatore.length < 3){
      codiceGiocatore += (Math.floor(Math.random() * 10) + 1);
      codiceGiocatore +=(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length - 1)));
    }
    
    return codiceGiocatore;
  }
  
  // funzione che crea numero random per media punti
  function randomNum(min, max){
    var punteggio = [];
    punteggio.push(Math.floor(Math.random() * (max - min + 1)) + min);

    return punteggio
  }

  console.log(arrSquadra)
})