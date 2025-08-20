//truthy and falsy
//truthy means kin kin values ko true mana jata hai 
//falsy means kin kin value ko false mana jata h
// const userEmail="somya@xyz"; //truthy

// if(userEmail){// we assume that userEmail contains value
//     console.log("got the email");
// }else{
//     console.log("dont have the email");    
// }

//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN 

//except above mentioned falsy value rest are truthy
//surprising truthy value
//"0","false"," ",[],{},function(){},


// let arr=[];
// if(arr.length===0){
//     console.log("Array is empty");
    
// }


// const emptyObj={};
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
    
// }\\\


// console.log(false==0);
// console.log(false=="");
// console.log(0=="");


// //NULLISH COALESCING OPERATOR(??): null undefined
// //safty to handle null and undefined case
// let val1;
// //assigns the first valid value
// val1= 5 ?? 10; // 5
// val1= null ?? 10; //10
// val1=undefined ?? 15; //15
// val1= null ?? 10 ?? 20 // 10
// console.log(val1);


//TERNIARY OPERATOR
// condition ? true : false

let iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");


 

 

