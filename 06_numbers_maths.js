const score=100; //primitive Number
//console.log(score);

const balance=new Number(100); //Number object 
//console.log(balance);
//console.log( typeof balance);
//console.log(balance.toString().length);
//console.log(typeof balance);

//console.log(balance.toFixed(1));

const otherNumber=123.8966;
//console.log(otherNumber.toPrecision(4));

const hundreds=10000000;
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString('en-IN')); //indian rupees

//*********************************MATHS******************************************************************************** */
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());    // value will always lie between 0 and 1 

//Math.random() gives a value between 0 and 1.
//Multiply by 10 → gives value between 0 and 10.
//Add 1 → final range becomes between 1 and 11 (not including 11).
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //This generates a random integer between min and max, inclusive.






