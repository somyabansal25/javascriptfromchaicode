//DESTRUCTURING
//Destructuring in JavaScript allows you to unpack values from arrays or properties from objects into distinct variables — in a clean and concise way.

//OBJECT DESTRUCTURING 
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"somya"
};
const{}=course;
const{courseInstructor:instructor}=course; //const{kya extract krna h:rename}=kisse extract krna h.
console.log(instructor);

//ARRAY DESTRUCTURING 
const arr=[10,20,30];
const[a,b,c]=arr;
console.log(a);
console.log(b);

//SKIP VALUES
const [first,,third]=arr;
console.log(third);

//DEFAULT VALUES
const[x,y,z=40]=[1,2];
console.log(z);

//SWAP VARIABLES
let h=5,g=10;
[h,g]=[g,h];
console.log(a,b);


//API(Application Programming Interface):-jab aapko apna kaam kissi aur ke sr pr daal dete hai toh usse api bolte h
//You (the user/app) ask the waiter (API) for food (data).
//The waiter takes your order to the kitchen (server).
//The kitchen prepares it, and the waiter brings it back to you.
//backend se aapke pass kuch values aati h and voh aap kaise likhte ho ussko api bolte h 
//ab jo voh values aati h voh JSON mei aati h 

//JSON
//JSON is a format for storing and sharing data — like a digital way of writing information that computers and humans can both understand.
//javascript object notation is used in :-
//Sending data between client and server
//APIs use JSON to send responses (like user data, product info)
//Storing configuration files
//json is also an object , in this keys are also written in strings 
//APIs are Json format 
// {
//     "name":"somya",
//     "coursename":"js in hindi",
//     "price":"free"
// }


//in simple words , JSON is the data that is being transferred
//and api is the way through which you send and receive data 
//JSON is the data you are sending or receiving (like a message or a package).
// API is the path or the way you use to send or receive that data (like a road or phone call).








