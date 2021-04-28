$(function(){
  
  var arr1 = ['a', 'b', 'c', 'd', 'e'];
  var arr2 = ['f', 'g', 'h'];
  var randomLetter = 'abcdefghijklmnopqrstuvwxyz';

  while(arr1.length != arr2.length) {
    if(arr1.length > arr2.length) {
      arr2.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
    }else {
      arr1.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
    }
  }

  console.log(arr1);
  console.log(arr2);

})