//Same data type hence no problem 
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);



// different data types hence PROBLEM
console.log("2">1); //javascript converts "2" into number automatically
console.log("02">1);



// MOSTLY AVOID THIS TYPE OF OPERATIONS
// console.log(null>1);  //false
// console.log(null==0); //false
// console.log(null>=0); //true
//NOTE:-
// the reason that == and > <>= <= work differently
// comparison convert null to a number, treating it as 0.
//that's why (3) null>= 0 is true and (1) null>1 is false

// MOSTLY AVOID THIS TYPE OF OPERATIONS
console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0); //false


//===(Strict check)===> checks data type also,no conversion
//== ===> doesnot check datatype,yes conversion
console.log("2" === 2); //false
console.log("2" == 2); //true











