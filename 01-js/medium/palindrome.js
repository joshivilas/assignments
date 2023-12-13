/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeTheSpacesAndPunctuation(str){
  let res = '';
  for(let i =0; i< str.length; i++){
    if(str[i] >= 'a' && str[i] <='z')
    res += str[i]
  }
  return res;
}


function isPalindrome(str) {
  if(str === '' || str.length === 1) return true;

  //remove spaces and punctuation from the string 
  str = str.toLowerCase(); // make lowercase to remove the punctuations
  str = removeTheSpacesAndPunctuation(str);

  let revStr = str.split('').reverse().join(''); // reverse the string

  return str === revStr;
}

module.exports = isPalindrome;
