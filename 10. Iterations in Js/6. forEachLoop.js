/*
The forEach loop in JavaScript is a method used to iterate over arrays. It's clean,
readable, and a bit more elegant than traditional for loops, 
especially when you just want to perform an operation on each element.
*/
const coding = ["JavaScript", "Java", "Ruby", "Cpp", "Python"];
// We use For...Each as a function, it's actually called a higher order function which we can use via . operator on any array.

/* We have to give a callBack function and callback functions don't have a name. 
Inside the function parameter, you just have to give any name of the value which will have the values of the array in each iteration.
*/
coding.forEach(function (val) {
  console.log(val);
})
// We can also write it using arrow functions without any name.
coding.forEach((item) => {
  console.log(item);
})
