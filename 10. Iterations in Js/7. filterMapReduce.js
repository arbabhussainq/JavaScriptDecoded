/* Filter in Js:
Filter also takes a callback function and actually returns a value.It filters out the values according to a given condition.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4); 
// One Line Function, doesn't require return keyword.

const newNums2 = myNums.filter( (num) => {return num > 4} );
