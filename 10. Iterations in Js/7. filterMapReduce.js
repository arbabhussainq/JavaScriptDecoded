/* Filter in Js:
Filter also takes a callback function and actually returns a value.It filters out the values according to a given condition.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4); 
// One Line Function, doesn't require return keyword.

const newNums2 = myNums.filter( (num) => {return num > 4} );
// Return keyword is mandatory as {} has it's own scope...

// What if we want to do the same with forEach???
const newNums3 = [];
myNums.forEach((nums) => {
  if (nums > 4) {
    newNums2.push(nums);
  }
});
console.log(newNums2);
// Filter Exercise: Filtering Books
const books = [
  {
    name: "The Silent Patient",
    year: 2019,
    genre: "Thriller",
    publishYear: "2010",
    edition: "1st"
  },
  {
    name: "1984",
    year: 1949,
    genre: "Dystopian",
    publishYear: "2015",
    edition: "1st"
  },
  {
    name: "To Kill a Mockingbird",
    year: 1960,
    genre: "Classic",
    publishYear: "1990",
    edition: "1st"
  },
  {
    name: "Atomic Habits",
    year: 2018,
    genre: "Self-Help",
    publishYear: "1995",
    edition: "2nd"
  },
  {
    name: "Dune",
    year: 1965,
    genre: "Science Fiction",
	publishYear: "2022",
    edition: "1st"
  },
	{
    name: "Educated",
    year: 2018,
    genre: "Memoir",
    publishYear: "2018",
    edition: "1st"
  },
	{
    name: "The Hobbit",
    year: 1937,
    genre: "Fantasy",
    publishYear: "1996",
    edition: "3rd"
  },
	{
    name: "The Midnight Library",
    year: 2020,
    genre: "Fiction",
    publishYear: "2015",
    edition: "1st"
  },
	{
    name: "The Subtle Art of Not Giving a F*ck",
    year: 2016,
    genre: "Self-Help",
    publishYear: "2017",
    edition: "1st"
  },
	{
    name: "Sapiens: A Brief History of Humankind",
    year: 2011,
    genre: "Non-Fiction",
    publishYear: "2010",
    edition: "4th"
  }
]; 