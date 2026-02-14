/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // スタイルを配列に統一（単一文字列でも配列として扱う）
  let styles = Array.isArray(caze) ? caze : [caze];

  // 優先順位の定義
  const priority = {
    camel: 1, pascal: 1, snake: 1, kebab: 1, title: 1,
    vowel: 2, consonant: 2,
    upper: 3, lower: 3
  };

  // 優先順位に従ってスタイルをソート
  styles.sort((a, b) => priority[a] - priority[b]);

  let currentString = input;

  // 各スタイルを順番に適用
  styles.forEach(style => {
    switch (style) {
      case "camel":
        currentString = currentString.split(' ').map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join('');
        break;
      case "pascal":
        currentString = currentString.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join('');
        break;
      case "snake":
        currentString = currentString.split(' ').join('_');
        break;
      case "kebab":
        currentString = currentString.split(' ').join('-');
        break;
      case "title":
        currentString = currentString.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
        break;
      case "vowel":
        currentString = currentString.replace(/[aeiou]/g, l => l.toUpperCase());
        break;
      case "consonant":
        currentString = currentString.replace(/[bcdfghjklmnpqrstvwxyz]/g, l => l.toUpperCase());
        break;
      case "upper":
        currentString = currentString.toUpperCase();
        break;
      case "lower":
        currentString = currentString.toLowerCase();
        break;
    }
  });

  return currentString;
};

module.exports = makeCaze;