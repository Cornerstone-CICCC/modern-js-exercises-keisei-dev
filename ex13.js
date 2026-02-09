/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // 1. 文字列を分割する
  const parts = date.split('/');
  const year = parts[0];
  const monthInt = parseInt(parts[1]);
  const dayInt = parseInt(parts[2]);

  // 2. 月の名前を配列で管理
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[monthInt - 1];

  // 3. 日に付ける序数（st, nd, rd, th）を決めるロジック
  let suffix = "th";
  if (dayInt === 1 || dayInt === 21 || dayInt === 31) {
    suffix = "st";
  } else if (dayInt === 2 || dayInt === 22) {
    suffix = "nd";
  } else if (dayInt === 3 || dayInt === 23) {
    suffix = "rd";
  }

  // 4. フォーマットに合わせて組み立てる
  return `${monthName} ${dayInt}${suffix}, ${year}`;
};

module.exports = talkingCalendar;