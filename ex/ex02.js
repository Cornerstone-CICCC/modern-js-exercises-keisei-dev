/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = (values, condition) => {
  let sum = 0;

  // 配列を一つずつ取り出す
  for (let num of values) {
    // 偶数の判定: num % 2 === 0
    // 奇数の判定: num % 2 !== 0
    
    if (condition === "even" && num % 2 === 0) {
      sum += num;
    } else if (condition === "odd" && num % 2 !== 0) {
      sum += num;
    }
  }

  return sum;
};

module.exports = conditionalSum;
