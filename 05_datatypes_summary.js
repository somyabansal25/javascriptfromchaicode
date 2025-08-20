//TYPES OF DATA TYPES
//2 TYPES ON THE BASIS OF how the data is kept in the memory and how is data accessed form the memory 
// hence, PRIMITIVE(call by value) AND NON-PRIMITIVE(reference type)

//PRIMITIVE TYPE(String ,Number, Boolean , null, undefined , Symbol( used to make the value unique) ,  BigInt)

const score=100; //number
const scoreValue=100.3; //number(no flosat in javascript)
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id= Symbol('123');
const anotherid= Symbol('123');
console.log(id===anotherid); //false

const bigNumber=345666666666666666666767n  //BigInt
console.log(typeof bigNumber);





//NON-PRIMITIVE(reference type)
//  Arrays, Objects, Functions

// is javascript dynamically typed or statically typed language
//ANS:-JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//For example, in JavaScript, you can do the following:

//let x = 10; // x is now a number
//x = "Hello"; // x is now a string
//x = true; // x is now a boolean
//On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at //////compile-time, before the code is executed.

//Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

//int x = 10; // x is a variable of type int
//String name = "John"; // name is a variable of type String
//JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness


const heros=["shaktiman" , "naagraj" , "doga"] // array

let myObj={  // curly brackets mei Objects
    name:"Somya",
    age:20,

}

//Function as variable 
const myFunction=function(){
    console.log("hello world");
    
}
//// https://262.ecma-international.org/5.1/#sec-11.4.3


//PRIMITIVE DATATYPES
//              Type                                    typeof
//i)             Number                                  number
//ii)            String                                   string
//iii)           Boolean                               boolean
//iv)           Bigint                                   bigint
//v)            Symbol                                symbol
//vi)           Null                                      object
//vii)          Undefined                               undefined

//NON PRIMITIVE DATATYPE

//i)               Object                                object
//ii)              Array                                  object
//iii)             Function                            function(object)


//*************************STACK AND HEAP MEMORY************************************************************************************************************

// Stack(PRIMITIVE) , heap(NON-PRIMITIVE)
// whenever you are using stack memory, you get the copy of the variable defined
// and whn you use heap memory to get reference of the variable means the original variable 
//eg:-

let myYoutubeName="Somyabansal"; //stores in stack memory
let anotherName=myYoutubeName; // copy of myYoutubeName is assigned to anotherName and changes are make to that copy.
anotherName="chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);


let userOne={
    email:"user@gmail.com", // this is an object and is stored in heap memory
    upi:"user@ybl"         // userOne is stored in stack and email and upi is stored in heap
                        // userOne points towards email and upi in the stack 


}
let userTwo=userOne; //userTwo also towards where userOne is pointing 
userTwo.email="somya@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
//hence changes are made to original object




