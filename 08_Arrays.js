//ARRAY
//js arrays are resizable and can contain a mix of different data types .
// js arrays-copy operations create shallow copies (changes will be made to the original object)
//0 based indexing 
const array=[1,2,3,4,5,6]
const myHeros=["shaktiman","naagraj"];
let myArr2=new Array(1,2,3,4);
console.log(array[0]);

//ARRAYS METHODS 
array.push(7);
console.log(array);
array.pop(); // remove last value of the array
console.log(array);

//The unshift() method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.
array.unshift(9);
console.log(array);

let fruits = ["apple", "banana"];
let newLength = fruits.unshift("mango", "orange");

console.log(fruits);     // Output: ["mango", "orange", "apple", "banana"]
console.log(newLength);  // Output: 4

//shifts
console.log(fruits.shift()); //The shift() method in JavaScript removes the first element from an array and returns that removed element. It modifies the original array.
console.log(fruits);

//includes 
console.log(fruits.includes("apple"));
//indexOf
console.log(fruits.indexOf("banana"));
//join 
//The join() method in JavaScript joins all elements of an array into a single string, separated by a specified separator.
const newArr=myArr2.join();
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);
console.log(fruits);
console.log(fruits.join(""));
console.log(fruits.join("-"));


//slice(imp)
//Returns a shallow copy of a portion of an array without modifying the original array.
//Syntax:-array.slice(start, end) start: index to begin (inclusive)
//end: index to stop (exclusive)

let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr);    // [1, 2, 3, 4]  (original array unchanged)

//splice(imp)
//Modifies the original array by adding or removing elements.
// syntax:- splice(start, deleteCount, ...items)
//start: where to begin
//deleteCount: how many to remove
//...items: what to insert
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months); //["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May");
console.log(months); //["Jan", "Feb", "March", "April", "May"]





//Feature	                 slice()	                         splice()
//Modifies original?	    ❌ No	                            ✅ Yes
//Purpose	                Extracts part of array	              Adds/removes elements
//Returns             	New array	                          Removed elements
























