
function calculateCartPrice(...num1){ //rest operator
    return num1;
}
console.log(calculateCartPrice(200,400,500));

//FUNCTIONS WITH OBJECTS
const user={
    username:"somya",
    price:199
};
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
//handleObject(user);
handleObject({
    name:"sam",
    price:400
});

//FUNCTION WITH ARRAY
const arr=[200,400,100,600];
function returnSecondValue(array){
    return array[1];
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([32,34,35,36]));




