// For looping over objects, we can use the for...in loop
const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  ru: "Rust",
};
for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`);
}
/* If you try for...in loop on arrays, that will just fetch the keys 
from the array unlike for...of loop which gives the values directly.
We can fetch the values using, `arrayName[key]`.
*/
