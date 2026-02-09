/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // 1. スペースで分割して単語の配列を作る
  const words = input.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      // 最初の単語はすべて小文字
      result += words[i].toLowerCase();
    } else {
      // 2番目以降の単語：先頭を大文字 + 残りを小文字
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  return result;
};

module.exports = camelCase;