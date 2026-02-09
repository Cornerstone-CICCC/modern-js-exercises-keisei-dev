/*
In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

Percent Encoding
Take a look at the following URL, specifically the last part:

https://www.google.com/search?q=cornerstone%20college

This URL will perform a google search for the term "cornerstone college". Notice that when the string "cornerstone college" is part of a URL, the space is replaced with %20.

If we want to add a parameter to a url, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, we will only be focusing on replacing the space with %20.


Instruction
Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Warning
Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function (text) {
  // 1. 前後の余計なスペースを削除する
  const trimmedText = text.trim();
  
  // 2. 結果を入れるための空の箱
  let result = "";

  // 3. 1文字ずつループで確認
  for (let char of trimmedText) {
    // 4. もし文字がスペースだったら
    if (char === " ") {
      result += "%20"; // %20 を合体させる
    } else {
      result += char;  // 普通の文字をそのまま合体させる
    }
  }

  // 5. 完成した文字列を返す
  return result;
};

module.exports = urlEncode;
