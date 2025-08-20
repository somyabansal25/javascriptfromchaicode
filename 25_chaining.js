//-------------------------CHAINING-------------------------------------
// const mynums=[1,2,3,4,5,6,7,8,9];
// let res=mynums.map( (i) => i*10).map( (i) =>  i+1).filter( (i) => i>=40)
// console.log(res);

//--------------------------------REDUCE----------------------------------------------
// const mynums=[1,2,3,4];
// let myTotal=mynums.reduce( function (acc,currVal) {
//     console.log(`acc:- ${acc} and current value:- ${currVal}`);
    
//     return acc+currVal;
// },0);//initial value of acc
// console.log(myTotal);


//arrow function 
// let nums=[1,2,3,4,5];
// let total=nums.reduce( (acc,curr) => acc+curr,0);
// console.log(total);

const shoppintCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:9999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
];
//add all the prices in the object
let totalprice=shoppintCart.reduce( (acc,item) => acc+item.price,0 );
console.log(totalprice);



