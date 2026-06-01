// IIFE = Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

// global scope ke pollution ko hatane ke liye iife ka use kiya gya jaata hai 

(function chai(){
    console.log(`DB CONNECTED`)
})();   // this semicolon is compulsary, represents first code ends.

// first () => function definition
// second () => function execution


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("diesel");



// (function chai(){
//     // named IIFE
// })