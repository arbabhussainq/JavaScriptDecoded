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
