/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

  // Put your solution here

const sumLargestNumbers = (data) => {
  // 1. 配列を大きい順に並び替える
  data.sort((a, b) => b - a);

  // 2. 0番目と1番目の数字（最大と2番目）を足して返す
  return data[0] + data[1];
};

// これがないとテストが動かないので、消さない
module.exports = sumLargestNumbers;
