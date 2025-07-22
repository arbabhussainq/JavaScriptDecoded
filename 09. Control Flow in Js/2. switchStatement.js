// Switch Case Statement:
// It works similar to if else-if statement with a different syntax.

/*
SYNTAX OF SWITCH STATEMENT:

switch (key) { // Key is any variable which we want to check
    case value:
        //code to be executed
        break; // using break statement is a must in switch case, It stops the execution of entire block if one case matches the key value.
		
    default: // If no case matches the key, then default case will run, it is similar to the else statement in if else-if structure
        //code to be executed if no case is matched
        break;
}
Example:        
*/

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid Month");
}
