//push
//Adds elements to the end of the original array.
//Modifies original array? ✅ Yes
//Returns: New length of the array.

let marvel_heros=["thor","Ironamn","spiderman"];
let dc=["superman","flash","batman"];
// marvel_heros.push(dc);
// console.log(marvel_heros); // Array inside array is created
// console.log(marvel_heros[3]); // dc becomes the 3-index of the marvel_heros
// console.log(marvel_heros[3][1]);//to access the sub elements of the dc array

//concat
//Merges arrays or values and returns a new array.
//Modifies original array? ❌ No
//Returns: A new combined array.
let combined=marvel_heros.concat(dc);
console.log(combined);

//spread(...)
//The spread operator (...) is used to expand (spread out) the elements of an iterable (like an array, string, or object) into individual elements.
//remember it by:- drop a glass
let all_new_heros=[...marvel_heros,...dc];
console.log(all_new_heros);

//flat()
//The flat() method is used to flatten nested arrays — that is, to reduce the depth of arrays by bringing elements from inner arrays to the top level.
//syntax:-array.flat(depth)

let arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real=arr.flat(Infinity);
console.log(real);

//TO CHECK IF THE OBJECT IS AN ARRAY
console.log(Array.isArray("Somya")); //returns true or false
//TO CONVERT IN ARRAY
console.log(Array.from("Somya")); //Array.from() creates a new array instance from an array-like or iterable object.
//returns new array
console.log(Array.from({name:"Somya"}));//Array.from() expects an iterable or array-like object. { name: "Somya" } is an object, not iterable, and it doesn't have a length property.

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//Array.of() creates a new array from its arguments. Returns new array










