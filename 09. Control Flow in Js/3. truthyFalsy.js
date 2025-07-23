// Truthy Values, Falsy Values, Nullish Operator, and Terniary Operator:
/*
Let's understand this via a code example:
If we query an email from the database, and then we have to print that email on the webpage, then we can do something like this.... */

const email = "arbab@gmail.com";
if (email) {
  console.log("Email Found");
} else {
  console.log("Email not Found");
}
// Output: Email found
// Now here, we didn't compare anything in the IF condition, we just checked a string "email", and since this email variable had a string that's why it became true but what if there is an empty string?
`const email = "";`;
// Then the output would be "Email not Found".
// Js just supposes that any string there would be true and if it's empty, then it would be false. This is the concept of truthy and falsy values.
// Instead of a string, if we had an empty array in "email" variable, it would be considered true.
/*
Falsy Values:
1. false
2. 0
3. -0
4. BigInt (0n)
5. "" -> Empty String
6. null
7. undefined
8. NaN
Except of all these, all values are considered as truthy values.

Truthy Values:
Some surprising truthy values are:
1. "0"
2. 'false'
3. " " -> String with a Space
4. [  ] -> Empty Array
5. { } -> Empty Object
6. function(){ } -> Empty Function, No Parameter, No Execution...
*/

// How to check if an array or object is empty or not?

// For an Array: You can check if it's length is 0.
const arr = [];
if (arr.length === 0) {
  console.log("Array is Empty");
}

// For an Object: You can check whether the length of the array of its keys is 0 or not.
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined:
//              We use it when we are dealing with null or undefined values. We can check that if a value is null or undefined, change it to some other value.
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5
val1 = null ?? 10;
console.log(val1); // 10
val1 = undefined ?? 15;
console.log(val1); // 15
val1 = null ?? 10 ?? 15;
console.log(val1); // 10

// Terniary Operator: ? :
// It is a completely different operator which provides a neater way to write if-else
`condition ? true : false`;
const teaPrice = 71;
teaPrice <= 70 ? console.log("Less than 70") : console.log("More than 70");
