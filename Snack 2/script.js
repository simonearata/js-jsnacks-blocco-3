$(function(){
  
  var zucchinaXs = [];
  var zucchinaXl = [];
  var pesoTotaleXs = 0;
  var pesoTotaleXl = 0;
  var arrZucchine = 

  [

    {
      'varietà' : 'zucchina1',
      'peso' : 0.9,
      'lunghezza' : 20
    },

    {
      'varietà' : 'zucchina2',
      'peso' : 0.5,
      'lunghezza' : 8
    },

    {
      'varietà' : 'zucchina3',
      'peso' : 12,
      'lunghezza' : 7
    },
    
    {
      'varietà' : 'zucchina4',
      'peso' : 6,
      'lunghezza' : 4
    },

    {
      'varietà' : 'zucchina5',
      'peso' : 7,
      'lunghezza' : 12
    },

    {
      'varietà' : 'zucchina6',
      'peso' : 1,
      'lunghezza' : 14
    },

    {
      'varietà' : 'zucchina7',
      'peso' : 7,
      'lunghezza' : 2
    },

    {
      'varietà' : 'zucchina8',
      'peso' : 6,
      'lunghezza' : 29
    },

    {
      'varietà' : 'zucchina9',
      'peso' : 5,
      'lunghezza' : 28
    },

    {
      'varietà' : 'zucchina10',
      'peso' : 0.4,
      'lunghezza' : 24
    },

  ];

  for(var zucchina of arrZucchine){
   
    if(zucchina['lunghezza'] < 15){
      
      zucchinaXs.push(zucchina);
      pesoTotaleXs += zucchina['peso'];

    }else{
      
      zucchinaXl.push(zucchina);
      pesoTotaleXl += zucchina['peso'];
    }


  }
  
  console.log(zucchinaXs);
  console.log(zucchinaXl);

  console.log('il peso delle corte: ' + pesoTotaleXs + 'g')
  console.log('il peso delle lunghe: ' + pesoTotaleXl + 'g')
  


})