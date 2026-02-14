/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function (instructors) {
  // 1. 最初の人を暫定チャンピオンにする
  let longest = instructors[0];

  // 2. 1人ずつ順番に見ていく
  for (let person of instructors) {
    // 3. もし「今の人の名前」の長さが「チャンピオンの名前」より長ければ
    // .length は文字の長さを教えてくれます
    if (person.name.length > longest.name.length) {
      // 4. チャンピオン交代！
      longest = person;
    }
  }

  // 5. 最後に残った一番長い名前の人を返す
  return longest;
};

module.exports = instructorWithLongestName;
