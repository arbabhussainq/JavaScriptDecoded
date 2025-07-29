/*
While Loop:
There are many ways of writing loops in programming, all having different syntax but the concept stays the same.
Syntax:

while (condition) {
	// code to execute
}

Example:
*/
let i = 0;
while (i <= 10) {
  console.log(`Value of i is ${i}`);
  i += 2;
}

// Iterating over an array using while loop:
let myArray = ["Flash", "Batman", "SuperMan"];
let index = 0;
while (index < myArray.length) {
  console.log(`Value at index ${index} is: ${myArray[index]}`);
  index++;
}
