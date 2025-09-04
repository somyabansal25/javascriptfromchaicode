//OBJECT LITERAL
const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user detail from db"); 
        //console.log(`Username is ${this.username}`);// this refers to the current object
         console.log(this);// this refers to the current object
         
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);// this refers to the global object (window in browsers, global in Node.js)
// why does this prints empty object in node.js? because in node.js, each file is treated as a separate module, and the top-level this in a module refers to module.exports, which is an empty object by default.


//CONSTRUCTOR FUNCTION 
//new keyword is used to create an instance of an object that has a particular type.
//new ko he ham constructor function bolte hai
//const promiseOne=new Promise();
//const date=new Date();

function user(username,loginCount,isLoggedIn){
    this.username=username;// this refers to the current object
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);   
    }
    
    return this;// not necessary to write this line, because by default, if we don't return anything, it will return this
}
const userone=user("hitesh",9,true);
console.log(userone);//undefined because we did not use new keyword
//why undefined? because when we call a function without new keyword, this refers to the global object (window in browsers, global in Node.js). So, the properties are added to the global object, and the function does not return anything, hence undefined.



const usertwo=new user("hitesh",9,true);
console.log(usertwo);//user {username: 'hitesh', loginCount: 9, isLoggedIn: true}
//why new object is being created? because when we use the new keyword, a new empty object is created, and this refers to that new object. The properties are added to that new object, and the function returns that new object by default. 

//ABOUT NEW KEYWORD
//whenever you use new keyword, following things happen behind the scenes
//1. A new empty object is created
//2. The function is called with this set to the new object
//3. The new object is linked to the prototype of the function
//4. The function automatically returns the new object (unless the function returns a non-primitive value)

//INSTANCE OF
console.log(userone instanceof user);//false because we did not use new keyword
console.log(usertwo instanceof user);//true because we used new keyword