//FUNCTIONS:- is a block of code that can be used multiple times 
function add(a, b) {
  console.log(a + b); //NO RETURN 
}

add(2, 3); // 5
add(10, 15); // 25
add(3,"4"); //PROBLEM OCCURS //js considers 3 as string .//34
add(3,"a")//3a
add(3,null)//3

const result=add(2,3);
console.log(result); //undefined // this will only work if your function return a value.
//Because a + b is calculated, but not returned — so result becomes undefined.

function addTwoNumbers(number1,number2){
    return number1+number2; 
    console.log("Somya"); // unreachable code //RETURN ke baad kuch print nhi hota h 
    
}
function loginUserMessage(username="sam"){
  if(username===undefined){
    console.log("Please enter a username");
    return ;
  }
  return `${username} just logged in `
}
loginUserMessage("Somya");//No OUTPUT
console.log(loginUserMessage("Somya"));
//CASE:- when no argument is given to the function 
console.log(loginUserMessage());

