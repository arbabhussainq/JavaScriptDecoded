/* Filter in Js:
Filter also takes a callback function and actually returns a value.It filters out the values according to a given condition.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4); 
// One Line Function, doesn't require return keyword.

const newNums2 = myNums.filter( (num) => {return num > 4} );
// Return keyword is mandatory as {} has it's own scope...

// What if we want to do the same with forEach???
const newNums3 = [];
myNums.forEach((nums) => {
  if (nums > 4) {
    newNums2.push(nums);
  }
});
console.log(newNums2);
// Filter Exercise: Filtering Books


