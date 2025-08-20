// jab ham literals ki tarah object declare krte h toh singleton object nhi banta
//constructor se object banaoge toh singleton banega 

//OBJECT LITERALS
//Object.create //Constructor method
const mySym=Symbol("key1");
let user={ //literal method 
    name:"Somya", //internlly name is string
    "full-name":"Somya Bansal", // can not be accessed by dot . you can only access this by square bracket method of accessing
    age:20,
    // mySym:"mykey1", //PROBLEM i.e being used as String not Symbol in Object
   [mySym]:"Rock", // if you want to refer to the value of mySym declared above use [].
    email:"somya@gmail.com",
    isLoggedin:false,
    lastLoginDay:["Monday","Saturday"]

} 
//Different accessing methods 
console.log(user.email);//MOSTLY USED
console.log(user["email"]); //as internally all keys are string
console.log(user["full-name"]);
console.log(user[mySym]);
user.email="abc@gmail.com"; //change a value
//Object.freeze(user); //locking an object 
user.age=21; //age does not change as the object is now frezzed
console.log(user.age);
console.log(user);

//adding function in the object 
user.greeting=function(){
    console.log("Hello user!!");
    
}
console.log(user.greeting); // through this funtion is not returned instead reference is returned
console.log(user.greeting());

user.greeting2=function(){
    console.log(`Hello JS User, ${this.name}`);//The this keyword in JavaScript refers to the object that is currently calling the function.
    
}
console.log(user.greeting2());






