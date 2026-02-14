/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.

Instruction
Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function (data) {
  let results = [];

  for (let i = 0; i < data.length; i++) {
    const value = data[i][0];  // 繰り返したい数字
    const count = data[i][1];  // 繰り返す回数
    let repeatedString = "";

    // 指定された回数分、文字列として連結
    for (let j = 0; j < count; j++) {
      repeatedString += value;
    }

    // 各セットの結果を配列に格納
    results.push(repeatedString);
  }

  // 配列の要素を ", " でつないで一つの文字列にする
  return results.join(", ");
};

module.exports = repeatNumbers;