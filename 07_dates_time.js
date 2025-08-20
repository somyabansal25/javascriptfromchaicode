//dates

let myDate=new Date() //creates new date object 
console.log(myDate); // not readable 
console.log(myDate.toString()); // better than before //Converts the Date object into a human-readable full string.
console.log(myDate.toDateString());//Returns only the date part, in a simplified readable format.
console.log(myDate.toLocaleString()); //Converts the date to a string, formatted based on your local time zone and region (e.g., India).
console.log(typeof myDate); //Date is a built-in object type.

//DIFFERENT WAYS TO REPRESENT DATES 
let myCreatedDate=new Date(2023,0,23);//This creates a date object for a specific date: // months start from 0 index in js 
console.log(myCreatedDate.toDateString());

let b=new Date(2003,11,7,5,8,3);
console.log(b.toLocaleString());

let d=new Date("2003-03-07");
console.log(d.toDateString());

//TIMESTAMPS
let myTimeStamp=Date.now();
//Date.now() returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC (called the Unix Epoch).
//It gives the number of milliseconds (not seconds!) that have passed since that time.
console.log(myTimeStamp);

//CONVERTING DATE TO MILLISECOND
let e=new Date("01-14-2023");
console.log(e.getTime());

// IN SECONDS
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',)







