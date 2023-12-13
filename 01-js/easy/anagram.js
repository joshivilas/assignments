/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let arr1 = str1.toLowerCase().split("").sort();
  let arr2 = str2.toLowerCase().split("").sort();
  if (arr1.length != arr2.length) return false;
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) return false;
  }
  return true;
}

module.exports = isAnagram;
