const name = "diesel"
const repoCount = 50

// console.log(name + repoCount + "Value")  // Outdates Syntax

// String Interpollation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 
// Output == Hello my name is diesel and my repo count is 50

const gameName = new String('Diesel-hc-com')

// console.log(gameName[0])  // Output == D
// console.log(gameName.__proto__)    // Output == {} "empty object"

 
// console.log(gameName.length)             // Output == 13
// console.log(gameName.toUpperCase())      // Output == DIESEL-HC-COM
// console.log(gameName.charAt(2))          // Output == e
// console.log(gameName.indexOf('h'))       // Output == 7

const newString = gameName.substring(0, 4)  // last value (4) is exclusive.
// console.log(newString)   // Output == Die

const anotherString = gameName.slice(-10, 4)
// console.log(anotherString)   // Output == s

const newStringOne = "   diesel    "  // remove unwanted space characters.
// console.log(newStringOne)          // Output ==    diesel   
// console.log(newStringOne.trim())   // Output == diesel


const url = "https://diesel.com/diesel%20vin"

// console.log(url.replace('%20', '-'));   // Output == https://diesel.com//diesel-vin

// console.log(url.includes('diesel'))     // Output == true
// console.log(url.includes('nikhil'))     // Output == false


// console.log(gameName.split('-'))       // Output == [ 'Diesel', 'hc', 'com' ]
