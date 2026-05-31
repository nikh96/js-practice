// ---------------------------- Primitive Data Types ---------------------------- //

// They are call by value, changes are happens in copy not in original reference memory.


/*
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Bigint
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemperature = null 
let userEmail  // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // Output == false

// const bigNumber = 354016540687n



// ---------------------------- Reference (Non-Primitive) Data Type ---------------------------- //

// Allocates reference in Memory.

/*
1. Arrays
2. Objects
3. Functions
*/

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "nikhil",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemperature)
