/*In this exercise, we will be printing multiplication tables to the console.

Multiplication Table
We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

Instruction
Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.
*/

const multiplicationTable = function (maxValue) {
  let rows = []; // 各行を格納する配列

  for (let row = 1; row <= maxValue; row++) {
    let currentRow = []; // 現在の行の数字を格納する配列
    
    for (let col = 1; col <= maxValue; col++) {
      currentRow.push(row * col);
    }
    
    // 行内の数字をスペースで連結して、配列に追加
    rows.push(currentRow.join(" "));
  }

  // 全ての行を「改行コード」で連結
  // これにより、最後の行の後に余計な改行が入りません
  return rows.join("\n");
};

module.exports = multiplicationTable;