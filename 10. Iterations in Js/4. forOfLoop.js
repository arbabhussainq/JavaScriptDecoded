/*
FOR OF LOOP:
The `for...of` loop is a modern and clean way to ** iterate over iterable objects ** in JavaScript, such as:
Arrays 
Strings  
Sets  
Maps etc...
Arrat of Objects: [ { }, { }, { } ]
Example:
*/
const arr = [1, 2, 3, 4, 5];
/*
for (const iterator of object) {
  iterator is the same as index which will iterate over the object, object basically means 
  the thing which you want to iterate over, It can be an object, String, Array etc.
}
*/
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

/*
Looping over MAP Objects
Map in Js is an Object as well in which we can hold key value pairs. They hold unique values and stay in the same order as they are stored:
*/

const map = new Map();
map.set("PK", "Pakistan");
map.set("EN", "England");
map.set("FR", "France");
console.log(map);

// Note: for...of loop works on *maps* only and not on objects, it will throw an error like objects are not iteratable._
