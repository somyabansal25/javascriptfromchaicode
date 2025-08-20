//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)->
//An IIFE is a function expression that executes immediately after it’s defined, primarily used to create a private scope and avoid polluting the global namespace.


(function chai(){
    //named IIFE
    console.log("DB connected");
    
})();
//here, semicolon is essential to seperate two iife blocks
// via Arrow function
//unnamed IFFE OR named IFFE
( (name) => {
    console.log(`DB connected two ${name}`);
    
})("Somya");    