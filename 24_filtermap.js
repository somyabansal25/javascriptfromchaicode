// const coding =["js","java","python","cpp","ruby"];
// const values=coding.forEach((item) => {
//     console.log(item);
//     return item;
    
// })
// console.log(values);
// for each loop does not return value


//FILTER (ALSO CALLBACK )
//Purpose → Create a new array with elements that pass a condition.
//Return value → A new filtered array.
//Modifies original array? → ❌ No.
//Stops early? → ❌ No (runs for all elements).
//RETURNS VALUE UNLIKE FOR EACH 

// const nums=[1,2,3,4,5,6,7,8,9,10];
// const res=nums.filter( (num) => num>4 )
// console.log(res);

// const nums=[1,2,3,4,5,6,7,8,9,10];
// const res=nums.filter( (num) => { // use return keyword with curly brackets else use ()
//     return num>4
// } )
// console.log(res);


//DOING SAME THING WITH FOR EACH LOOP
//for each basics:-
// Purpose → Just do something for each element (side effects: print, update, push to another array).
// Return value → Always undefined.
// Modifies original array? → No, unless you do it inside callback.
// Stops early? → ❌ No (break or return won’t exit early).

// const myNums=[1,2,3,4,5,6,7,8,9,10];
// const res=[];
// myNums.forEach( (num) => {
//     if(num>4){
//         res.push(num);
//     }

// })
// console.log(res);


// const books = [
//   { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988, rating: 4.7 },
//   { title: "Atomic Habits", author: "James Clear", genre: "Self-help", year: 2018, rating: 4.9 },
//   { title: "Clean Code", author: "Robert C. Martin", genre: "Programming", year: 2008, rating: 4.8 },
//   { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", year: 1997, rating: 4.6 },
//   { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", year: 1999, rating: 4.7 },
//   { title: "Deep Work", author: "Cal Newport", genre: "Self-help", year: 2016, rating: 4.5 },
//   { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", year: 2011, rating: 4.8 },
//   { title: "You Don’t Know JS", author: "Kyle Simpson", genre: "Programming", year: 2015, rating: 4.6 }
// ];

// let res= books.filter( (bk) => bk.genre=="Programming" );
//  res=books.filter((bk) => {
//     return bk.rating >4.7;
//  })
// console.log(res);


//-------------------MAPS-------------------
//--------------------------------------
// Loops through each item in the array |
// Runs a function on each item         |
// Returns a new array with the results |
// Does not change the original array   |
//---------------------------------------

// const nums=[1,2,3,4,5,6,7,8,9]; 
// const res=nums.map( (i) => {
//     return i+10;
// })
// console.log(res);


//with for each
// let res=[];
// nums.forEach( (i) => {
//     res.push(i+10);
// })
// console.log(res);
//------------------------------------------------------------------------------------------------------------------------|
// forEach() → Just iterates over the array to perform some action (like logging or updating something). No return value. |
//                                                                                                                        |
// map() → Iterates and creates a new array from the results of the callback function.                                    |                         
//                                                                                                                        |
// map() → Transforms each element of an array into something else → returns a new array of the same length.              | 
//                                                                                                                        |
// filter() → Selects elements that pass a condition → returns a new array that may be shorter.                           |
//------------------------------------------------------------------------------------------------------------------------|


//-------------CHAINING------------------------------





