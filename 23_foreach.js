const coding =["js","java","python","cpp","ruby"];
// coding.forEach(function (val){
//     console.log(val);
    
// })


//for each with arrow function
// coding.forEach((val)=>{
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);//just give reference , do not call


// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
    
// })


//ITERATION ON ARRAY OF OBJECTS

const myCoding=[
    {
        languageName: "java",
        languageFileName:"js"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
    {
        languageName: "c++",
        languageFileName:"cpp"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})