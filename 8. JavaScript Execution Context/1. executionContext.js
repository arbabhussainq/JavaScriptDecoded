/*
How Js File Executes:

The first thing that is made while executing the program is Global Execution Context(this).In browser, the value of this is Window, because in browser, the global EC is Window Object.
* JavaScript is a single threaded language *
    
There's another execution context that is Function Execution Context.
Apart from that, there's another less important EC that is Eval Execution Context.
Js Runs in 2 Phases.
    1. Memory Creation Phase
    2. Execution Phase
Memory Creation Phase:
Memory is allocated to all the things that are declared.
Execution Phase:
Execution of the program occurs in execution phase.
Example:
*/
let num1 = 10;
let num2 = 5;

function addNum(val1, val2) {
  let total = val1 + val2;
  return total;
}
let result1 = addNum(num1, num2);
let result2 = addNum(10, 2);

/*
PROCESS:
Step1: Global Execution Context (this).
Step2: Memory Creation Phase (First Phase)
			1. num1 = undefined
			2. num2 = undefined
			3. addNum = Definition of Function
			4. result1 = undefined
			5. result2 = undefined
Step3: Execution Phase (Second Phase): 
			1. num1 = 10
			2. num2 = 5
			3. Function definition has already been taken in memory phase.
			4. Since addNum(loc 8 and 9) is a function, a seperate function execution context will be created for it where it will be executed. that execution context itself has a variable environment and an execution thread.
				1. Memory Phase:
							1. num1 = undefined
							2. num2 = undefined
							3. total = undefined
				2. Execution Phase:
							1. val1 = 10
							2. val2 = 5
							3. total = 15
							This total would be returned to global execution context and then this function execution context would be deleted
			5. result1 = 15;
			6. result2: Will again create the new function execution context with another variable environment and execution thread, and the same steps will be repeated just as result1.
*/

/*
CALL STACK:
It's a stack(Last In First Out) structure in the global execution context for function calls. When a function is called, it enters the call stack and then when it ends, it leaves the call stack. If the function calls another function inside it and basically perform a nesting of functions then it uses LIFO. The function which came the last in Call Stack will exit it first.

Example: You can run the following code in the snippets section which is available in sources inside developer tools and then apply breakpoints to see the stacking visually.
*/
function one() {
  console.log("One");
}
function two() {
  console.log("Two");
}
function three() {
  console.log("Three");
}
// This script will help visualise the stacking of functions in call stack
function one() {
  console.log("One");
  two();
}
function two() {
  console.log("Two");
  three();
}
function three() {
  console.log("Three");
}
one();
two();
three();
