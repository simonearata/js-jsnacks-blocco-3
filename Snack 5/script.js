$(function(){
 
  var arr1 = []
  
  // funzione
  function snack5 (arr1, b, a){
    var b = (Math.floor(Math.random() * arr1))
    var a = (Math.floor(Math.random() * b))

    for (var i = a; i < b; i++){
      var arr2 = 
      arr1.push(i)
    }

    return arr1
    
  }

  snack5(10, 2, 5)
 

})