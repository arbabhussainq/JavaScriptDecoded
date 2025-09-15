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
});
// We can also write it using arrow functions without any name.
coding.forEach((item) => {
  console.log(item);
});
// Or we can also give the reference of an existing function as a parameter which will then print the items of array
coding.forEach(
  (item, index, arr) => {
    console.log(item, index, arr);
  } //It will print the item, then it's index, and then the entire coding array.
);

// for...each works only on arrays and not on objects, although we can use it on arrays containing objects like:

const myCoding = [
  {
    langName: "JavaScript",
    langCode: "js",
  },
  {
    langName: "C++",
    langCode: "cpp",
  },
  {
    langName: "Python",
    langCode: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName);
});

// Does forEach return any values?
const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values); // undefined, forEach doesn't return any values.
