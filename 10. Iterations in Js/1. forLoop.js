/* Iteration refers to the process of repeating a set of instructions, usually through loops until a certain condition is met. 
JavaScript supports several types of iteration mechanisms.
SYNTAX:
for (initialization; condition; update) {
  // code
}
*/

// Example: Print numbers from 1 to 10
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

/*In the first iteration, the index is initialized, then the condition is checked, 
if the condition check satisfies, code gets executed and the value of index is updated, 
then again the condition is checked according to updated index and if it's true, the code executes and 
this keeps on repeating until the condition check becomes false(condition is met).
 */

/*Nesting of Loops:
Nesting of loops means placing one loop inside another loop. 
The inner loop runs completely every time the outer loop runs once. 
This is useful when working with multi-dimensional data, pattern printing, or performing repeated actions in layers.
*/

//Example:
for (let i = 0; i <= 10; i++) {
  console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`inner loop value: ${j}`);
  }
}

