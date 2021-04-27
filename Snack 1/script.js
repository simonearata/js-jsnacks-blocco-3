$(function(){

  var arrZucchina = 

  [

    {
      'varietà' : 'zucchina1',
      'peso' : 1,
      'lunghezza' : '20cm'
    },

    {
      'varietà' : 'zucchina2',
      'peso' : 2,
      'lunghezza' : '8cm'
    },

    {
      'varietà' : 'zucchina3',
      'peso' : 1.5,
      'lunghezza' : '7cm'
    },
    
    {
      'varietà' : 'zucchina4',
      'peso' : 1.9,
      'lunghezza' : '4cm'
    },

    {
      'varietà' : 'zucchina5',
      'peso' : 1.7,
      'lunghezza' : '12cm'
    },

    {
      'varietà' : 'zucchina6',
      'peso' : 3,
      'lunghezza' : '14cm'
    },

    {
      'varietà' : 'zucchina7',
      'peso' : 5,
      'lunghezza' : '2cm'
    },

    {
      'varietà' : 'zucchina8',
      'peso' : 0.5,
      'lunghezza' : '29cm'
    },

    {
      'varietà' : 'zucchina9',
      'peso' : 0.9,
      'lunghezza' : '28cm'
    },

    {
      'varietà' : 'zucchina10',
      'peso' : 0.4,
      'lunghezza' : '24cm'
    },

  ]

  var pesoTotale = 0;

  for(var zucchine of arrZucchina){
    console.log( zucchine['peso'])
    pesoTotale += zucchine['peso'];
  }
  
  console.log('il peso totale è: ' + pesoTotale.toFixed(2))


})