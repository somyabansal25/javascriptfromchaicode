// this keyword:- is used to refer current context
// Inside an object method → this refers to the object itself.
const user={
    username:"somya",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website.`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage();
// user.username="Sam";
// user.welcomeMessage();


//browser mei global object  Window hota h 
console.log(this);// in node empty object


//In a regular function (non-method) → this refers to the global object (window in browser, global in Node.js)
// function chai(){
//     let username="somya";
//     console.log(this.username);//undefined 
//     //this can be used inside objects only.
    
// }
// chai();


// const chai=function(){
//     let username="somya";
//    console.log(this.username);
// }
// chai() //undefined


// const chai = () => {
//     let username="somya";
//    console.log(this.username); //undefined
//    console.log(this);//{}
    
// }
// chai() 


//ARROW FUNCTIONS

// const addTwo = (num1,num2) => {
//     return num1+num2; //agar curly brackets use kroge toh return likhna padhega
// }

// const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => (num1+num2) // round brackets mei return nhi likhna padhega
console.log(addTwo(3,4));

const onj = (num1,num2) => ({username: "Somya"});
constmyarr = [2,3,4,5,6];
