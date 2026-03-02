/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  
  const words = input.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      
      result += words[i].toLowerCase();
    } else {
      
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  return result;
};

module.exports = camelCase;
