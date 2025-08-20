//const tinderUser=new Object(); //Singleton Object 
const tinderUser={} //NonSingleton Object
tinderUser.id="123abc";
tinderUser.name="Somya";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);//Accessing method for both object types is same 

const regularUser={
    email:"abc@gmal.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }

    }
}
//console.log(regularUser.fullname.userfullname.firstname);

//how to combine objects 
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2};//obj inside obj is created
//const obj3=Object.assign({},obj1,obj2); //single obj is returned with all the key value pairs //{} is optional.
const obj3={...obj1,...obj2} //MOSTLY USED //Spread operator
//console.log(obj3);


//Objects inside Array
const users=[
    {
        id:1,
        email:"h@gamil"
    },
    {
        id:2,
        email:"c@gamil"
    }
]
//console.log(users[1].id);//how to access object inside array 

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //to return all the keys in the objects// this returns array of keys
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check a perticular key exist in the object or not 












