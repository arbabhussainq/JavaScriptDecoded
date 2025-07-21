/*
We don't want the program to execute every line of code all the time, There should be certain conditions, 
like when the user logs in, a part of code runs, If he logs out, some other code runs, if the credentials are correct, some code should run, 
if it's not, then some other code should run. We can use control flow statements to do this.

IF Statement:
    if(true){
        runs when true
    }
    We can use Comparison Operators to determine true or false.
< , > , <= , >= , == , === , !=
*/
const temperature = 43;
if (temperature > 35) {
  console.log("It is hot today");
}
console.log("It is cold today");

// Output:
//It is hot today
//It is cold today

// Both statements are being printed so overcome this thing, we can use the else keyword along with IF. 
// If the condition is true, run the IF block and leave the else. If the condition is false, run the else block and leave the If.

if (temperature > 35) {
  console.log("It is hot today");
} else {
  console.log("It is cold today");
}
// Output:
//It is hot today

//If you are using just a single statement, then you can skip the curly braces, it will create an implicit scope but can be used just for a single statement.

const bill = 1000;
if (bill > 5000) console.log("You will get a discount");
// We can add multiple lines as well with a comma but that syntax is unreadable and not recommended.
if (bill > 5000)
  console.log("You will get a discount"),
    console.log("Avail discount using XYZ code");

/*
IF-Else-IF Statement:
If we want to execute the code based on multiple conditions then we use the else-if statement.
Example: I want to calculate grade of a student based on his percentage. If it's between 70-80(A Grade), 
If it's between 60-70(B Grade) and so on, here we have a bunch of conditions so we have to use the else-if or switch statement.
*/

let balance = 700;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// Using AND && and OR || Operator:
// AND => Execute the code if all statements given in condition are true.
// OR => Execute the code if even one statement in the given condition is true.
const userLoggedIn = true;
const debitCardAvailable = true;
const logInFromGoogle = true;
const logInFromEmail = false;

if (userLoggedIn && debitCardAvailable) {
  console.log("You can buy the course");
}

if (logInFromEmail || logInFromGoogle) {
  console.log("User Logged In");
}
// Instead of just 2, We can type any number of statements in the condition.
