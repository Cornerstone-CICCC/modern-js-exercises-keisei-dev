/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function (instructors) {
  
  let longest = instructors[0];

  for (let person of instructors) {
    
    if (person.name.length > longest.name.length) {
      
      longest = person;
    }
  }

  return longest;
};

module.exports = instructorWithLongestName;
