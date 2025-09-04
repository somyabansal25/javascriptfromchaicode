// //PROMISES
// // A Promise is basically an object that represents the eventual completion (or failure) of an asynchronous operation.

const { response } = require("express");

// const { response } = require("express");

// Think of it like:
// “I promise to give you the data. Not now, but later. If I succeed, I’ll give you the result. If I fail, I’ll give you the reason.”
const promiseOne=new Promise(function (resolve,reject){//because promise is an object it takes a callback function with two parameters resolve and reject

    //Do an async task
    //DBcalls,crytography,network
    setTimeout(function(){
        console.log(("Async task is complete"));
        resolve()//if the async task is completed successfully
        // reject()//if the async task is failed
    },1000)
}) 

promiseOne.then(function(){//then() method is used to consume the promise and it takes a callback function as parameter
    console.log("Promise consumed");
})//if promise is resolved
// promiseOne.catch()//if promise is rejected


//Shortcut
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two.");
        resolve();
        
    },1000)
}).then(function(){
    console.log("Async task resolved");  
})


//promiseThree
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai" , email: "chai@example.com"})//sending an object as a response
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//promise Four
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "hitesh",password:"123"})
        }else{
            reject("ERROR:SOMETHING WENT WRONG")
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);//whole object is printed
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error) 
}).finally(() => console.log("Promise is either resolved or rejected"))//finally() method is used to execute a callback function once the promise is settled, regardless of whether it was resolved or rejected.


//promise five
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "javascript",password:"123"})
        }else{
            reject("ERROR:JS WENT WRONG")
        }
    },1000)
})
async function consumePromiseFive(){//async function is used to consume the promise
    try{//try catch block is used to handle the error
        const response=await promiseFive//await keyword is used to wait for the promise to be resolved or rejected
        console.log(response);//if promise is resolved
    }catch(error){
        console.log(error);//if promise is rejected
    }  
}
consumePromiseFive()

// async does the same job as then() and catch() method

//new concept
async function getAllUsers(){
    try{
    const reponse=await fetch("https://api.github.com/users/hiteshchoudhary7")
    const data=await response.json()
    console.log(data); 
}catch(error){
    console.log("E: ",error);
    
}    
}
getAllUsers();


//above concept with then() and catch()
fetch("https://api.github.com/users/hiteshchoudhary7").then((response) => {
    return response.json()
}).then((data)=> {
    console.log(data);
    
}).catch((error) => {
    console.log(error) })


//FINAL NOTE:-
//why fetch() is executed first as compared to await keyword? ANSWER:-request through fetch() is high priority task
//because fetch() is a non blocking function and it is executed first and then await keyword is executed
//await keyword is used to wait for the promise to be resolved or rejected 

//Note: A fetch() promise will only reject on network failure or if anything prevented the request from completing.
//a fetch() promise only rejects when a network error is encountered (which is usually rare).
//A fetch() promise does not reject on HTTP error status even if the response is a HTTP 404 or 500.
//Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.