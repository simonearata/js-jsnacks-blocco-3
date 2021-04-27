$(function(){
  
  var arr1 = ['a', 'b', 'c', 'd', 'e'];
  var arr2 = ['f', 'g', 'h'];
  var randomLetter = 'abcdefghijklmnopqrstuvwxyz'

/*   if( arr1.length >= arr2.length){

    arr2.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));

  }
 */

  for( var i = 0; arr1[i].length > arr2[i].length; i++ ){
    arr2.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
  }
  

  console.log(arr2)

})