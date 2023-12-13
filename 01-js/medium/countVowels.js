/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const strLc = str.toLowerCase();

  let count = 0;
  let set = new Set();
  set.add('a');set.add('A');
  set.add('e');set.add('E');
  set.add('i');set.add('I');
  set.add('o');set.add('O');
  set.add('u');set.add('U');
  // console.log(set);
  for(let i=0; i< str.length; i++){
    let char = str[i];
    if(set.has(char)===true)
      count++;
  }
  return count;

}

module.exports = countVowels;