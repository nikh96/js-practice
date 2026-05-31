// ************************************* Numbers ************************************* //

const score = 400
// console.log(score)   // Output == 400

const balance = new Number(100)
// console.log(balance)   // Output == [Number: 100]

// console.log(balance.toString().length)   // Output == 3
// console.log(balance.toFixed(2))   // Output == 100.00


const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))  // Output == 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString())  // Output == 1,000,000 (default US number system)
// console.log(hundreds.toLocaleString('en-IN'))   // Output == 10,00,000

// ************************************* Maths ************************************* //

// console.log(Math)  // Output == Object [Math] {}

// console.log(Math.abs(-4))  // absolute value // Output == 4
// console.log(Math.round(4.3))  // round off // Output == 4
// console.log(Math.ceil(4.2))  // Output == 5 (top value)
// console.log(Math.floor(4.9))  // Output == 4 (lower value)

// console.log(Math.random())   // always lies between 0 and 1 and are random
// console.log((Math.random()*10) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)