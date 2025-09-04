//NOTES FOR ASYNC

// 1. JavaScript Execution Model
// Single-threaded
// JS has one call stack → executes one task at a time.
// Example: if function A is running, function B has to wait.
// Synchronous
// Code runs line by line, top to bottom.
// Each line must finish before moving to the next.
// Example:
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// 👉 Output: Task 1 → Task 2 → Task 3


// 2. Blocking vs Non-Blocking
// Blocking
// A task that stops further execution until it completes.
// Example: alert("Hello") → until you click OK, code is stuck.
// Non-Blocking
// A task that starts, but doesn’t block the main thread.
// JS continues other tasks in the meantime.
// Example:
// setTimeout(() => console.log("After 2s"), 2000);
// console.log("This runs immediately");


// 3. Asynchronous Programming
// Why needed? → JS single-threaded nature means long/blocking tasks can freeze UI. Async allows smooth execution.
// Async = tasks that take time but don’t block others.
// Ways to handle Async:

// Callbacks
// First style, but leads to "callback hell".

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//   }, 1000);
// }, 1000);

// Promises
// Cleaner handling of async results.
// pending → initial state
// fulfilled → success
// rejected → error

// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   success ? resolve("Done ✅") : reject("Error ❌");
// });
// promise
//   .then(result => console.log(result))
//   .catch(err => console.log(err));


// async / await
// Most modern & readable.

// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }
// getData();


// 1. Node.js File System (fs module)
// In browser JS, you don’t directly access system files.
// In Node.js, we use the built-in fs (File System) module.
// const fs = require("fs");


// 2. Synchronous File Reading (Blocking)
// Code waits until the file is completely read.
// Nothing else runs during this time.

// const fs = require("fs");
// console.log("Start");
// const data = fs.readFileSync("file.txt", "utf-8"); // blocking
// console.log(data);
// console.log("End");

// 👉 Output order:
// Start
// <file content>
// End


// 3. Asynchronous File Reading (Non-Blocking)
// File reading happens in the background.
// Meanwhile, other code keeps running.
// Once file is read, callback (or promise) gives result.

// const fs = require("fs");
// console.log("Start");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error:", err);
//     return;
//   }
//   console.log(data);
// });
// console.log("End");

// 👉 Output order:
// Start
// End
// <file content>   // printed later when ready

//--------------------------------------------------------------------------------------------------------------------------------
//NOTES ON EVENT LOOP
 //WATCH VIDEO: https://www.youtube.com/watch?v=zgt5oTD3rRc&t=632s
// 1. Why Event Loop?
// JavaScript is single-threaded → one thing at a time.
// But still, it can handle async tasks (timers, file reading, API calls) without blocking.
// 👉 This is possible because of the Event Loop.

// 2. Components Involved
// Call Stack
// Where functions are executed one by one.
// Follows LIFO (Last In First Out).
// Web APIs (Browser) / Node APIs (Node.js)
// Handles async work like setTimeout, fetch, fs.readFile.
// Callback Queue / Task Queue
// Stores async callbacks (e.g., from setTimeout, readFile).
// Event Loop
// Keeps checking:
// If Call Stack is empty → take next callback from queue → push to Call Stack.

// 3. Example with setTimeout
// console.log("Start");
// setTimeout(() => {
//   console.log("Timer finished");
// }, 2000);
// console.log("End");

// 👉 Flow:
// console.log("Start") → runs immediately.
// setTimeout → sent to Web API → after 2s, callback goes to Callback Queue.
// Event Loop pushes it into Call Stack after main stack is empty.
// console.log("End") runs before timeout callback.

// Output:
// Start
// End
// Timer finished

// Note: Even if setTimeout is 0ms, it still goes to the queue and waits for the stack to clear.

// ✅ Key Points
// Call Stack = execution area.
// Web/Node APIs = handle async tasks.
// Queues = store async results (Microtask > Callback priority).
// Event Loop = traffic manager, moves tasks when stack is empty.

// 5. Microtask Queue vs Callback Queue
// Microtask Queue (higher priority):
// Holds Promises, async/await results.
// Callback Queue:
// Holds tasks like setTimeout, setInterval, fs.readFile.
// 👉 Event Loop first clears Microtask Queue before Callback Queue.

// ✅ Key Points
// Call Stack = execution area.
// Web/Node APIs = handle async tasks.
// Queues = store async results (Microtask > Callback priority).
// Event Loop = traffic manager, moves tasks when stack is empty.
//--------------------------------------------------------------------------------------------------------------------------------
//NOTES ON FETCH API & PROMISES
// 1. What is an API?
// API = Application Programming Interface
// Simply: a way for one software to talk to another.
// In web development:
// Client (browser) asks for data.
// Server (API) sends back data (often in JSON format).
// Example (real-world analogy):
// Think of API as a waiter in a restaurant 🍴.
// You (client) place an order.
// Waiter (API) carries your request to the kitchen (server).
// Waiter brings back food (data) to you.

// 2. What is Fetch API?
// Fetch API is a built-in JS feature for making network requests.
// Helps you get data from APIs (like weather, news, products).
// Returns a Promise.
// Example (theory):
// You call fetch("url").
// It sends request to server.
// When server replies, fetch gives you a Promise.


//--------------------------------------------------------------------------
//WHat i understand from above notes:
// Your line — “API hame help krta h server se data lene aur dene mei” — is the essence of what an API does.
// Just to refine it a little for your notes:
// API (Application Programming Interface) → ek bridge hai jo client (browser / app) aur server ke beech communication allow karta hai.
// Ye data mangne (GET) aur bhejne (POST, PUT, DELETE, etc.) dono ke liye use hota hai.
// Server mostly JSON format mei reply deta hai, jo browser use karke webpage update karta hai.

// Yes, fetch() is part of JavaScript (ES6 onwards) → it’s a built-in function.
// Its main job: API ko call karna aur server se data lana / bhejna (without blocking JS).
// Jab aap fetch("url") likhte ho → JS request ko Web API ke through server tak bhejta hai → server se jo response aata hai, usko Promise ke form mei return karta hai.
// Quick Note for You:
// fetch() JavaScript ka hi part hai, lekin internally ye browser ke Web API par depend karta hai.
// Isliye agar tum Node.js mei fetch() use karoge, to pehle node-fetch ya built-in Node fetch library load karni padti hai (Node v18+ mei directly available hai).
// 👉 Tumhari statement:
//IMP-> “fetch api js ka he part hai jo api se data lene mei help krta h”
// ✅ Correct hai! Bas thoda aur exact way:
// 🔹 fetch ek JS function hai jo hame APIs ke through server se data lene aur bhejne mei help karta hai.
