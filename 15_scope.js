
// //why var is promlematic ? because var does not follow block scope
// //{}//SCOPE
// //forexample:-
// if(true){
//     let a=10;
// const b=20;
// var c=30;
// }
// console.log(c);// this will print 30 which is shouldnt be printing because of block scope


// //NESTED SCOPE
// //child function can access parent function's variable 
// function one(){ //parent function 
//     const username="somya";
//     function two(){//child function 
//         const website="youtube";
//         console.log(username); //no error 
        
//     }
//     console.log(website); //error
//     two();  
// }
// one();


// //if else nested 
// if(true){//parent if
//     const username="somya";
//     if(username==="somya"){//child if 
//         const website=" youtube";
//         console.log(username+website);//no error
        
//     }
//   //  console.log(website);//error
    
    
// }
// //console.log(username);//error


//*****************************interesting**********************************************************************************
addone(5); //value is returned but not printed//NO error
function addone(num){
    return num+1;
}


//in js variables are very powerful. they can hold anything
//HOISTING 
addtwo(5);//error
//because here,addtwo needs to be declared before calling as it is being stored in a variable 
const addtwo=function (num){ //this is called expression 
    return num+2;
}
