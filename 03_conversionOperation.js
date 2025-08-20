let score="somya";
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber=Number(score); //Conversion
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//NOTE
//"33"==>33
//"33abc"==>NaN
//"somya"==>NaN
//true==>1,false==>0
//null==>0
//undefined==>NaN(not a number)

let isLoggedIn="Somya";
let booleanisLoggedIn=Boolean(isLoggedIn);
//console.log(booleanisLoggedIn);

//NOTE
//1==>true,0==>false
//""==>false
//"somya"==>true


let a=33;
let stringA= String(a);
//console.log(stringA);
//console.log(typeof stringA);

//**********************************Operations*****************************

let value=3;
let negValue=-value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 3
// console.log(2/3);
// console.log(2%3);

let str1="hello";
let str2="somya";
let str3=str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"3");


//NOT GOOD PRACTICE
console.log(+true); // + means number conversion 
//console.log(true+);
console.log(+"");


//NOT GOOD PRACTICE
let num1,num2,num3;
num1=num2=num3=2+2;


let gameCounter=100;
gameCounter++;
console.log(gameCounter);



















