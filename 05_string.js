const name="Somya"; //primitive string 
const repoCount=50;
//console.log(name+repoCount+" +"Value"); //old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern way


//string objects
//Mainly used when you want access to string as an object (not common in real-world usage).
const gameName=new String('Somya-bansal-com'); // string object 
//internally every primitive string is converted into string object temporarily because primitive strings does not have methods


console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__); // to access prototype of the string 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString=gameName.substring(6,12); //cannt operate on negative number
console.log(newString);


const anotherString=gameName.slice(-8,9); //can operate on negative number
console.log(anotherString);

const a="   somya   ";
console.log(a.trim());

const url="https://somya.com/hitesh%20bansal";
console.log(url.replace("%20","-"));

console.log(url.includes("sundar"));


//split() method in JavaScript — it’s super useful for converting a string into an array
console.log(gameName.split("-"));










