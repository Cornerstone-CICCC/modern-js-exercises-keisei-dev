/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/
const numberOfVowels = function (data) {
  // 1. 数えるための箱を用意
  let count = 0;
  
  // 2. 母音をまとめた文字列を用意
  const vowels = "aeiou";

  // 3. 文字列を1文字ずつチェックする（for...of ループ）
  for (let char of data) {
    // 4. もし、その文字(char)が vowels の中に含まれていたら
    if (vowels.includes(char)) {
      count++; // 箱に 1 を足す
    }
  }

  // 5. 最後に合計を返す
  return count;
};

module.exports = numberOfVowels;