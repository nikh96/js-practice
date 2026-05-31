// ******************************* Conversions ******************************* //

// let score = "33"
// let num = "33abc"

// console.log(typeof score);  // Output == string
// console.log(typeof(score));   // Output == string

// let valueInNumber = Number(score)   // score is converted into Number
// console.log(typeof valueInNumber)   // Output == number

// let valueInNum = Number(num)    // it converts value of num into a Number.
// console.log(typeof valueInNum)  // Output = number 
// console.log(valueInNum)   // Output = NaN -- Not a Number

// let value1 = null
// let valueInValue1 = Number(value1)
// console.log(typeof valueInValue1)  // Output == number
// console.log(valueInValue1)   // Output = 0

// let value2 = undefined
// let valueInValue2 = Number(value2)
// console.log(typeof valueInValue2)   // Output == number
// console.log(valueInValue2)   // Output == NaN

// let value3 = true
// let valueInValue3 = Number(value3)
// console.log(typeof valueInValue3)   // Output == number
// console.log(valueInValue3)   // Output == 1

// let value4 = "nikhil"
// let valueInValue4 = Number(value4)
// console.log(typeof value4)   // Output == string
// console.log(typeof valueInValue4)   // Output == number
// console.log(valueInValue4)   // Output == NaN


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)   // Output == true

// let something = ""
// let booleanSomething = Boolean(something)
// console.log(booleanSomething)   // Output == false

// let someName = "Diesel"
// let booleanSomeName = Boolean(someName)
// console.log(booleanSomeName)    // Output == true


// 1 => true; 0 => false
// "" => false
// "Diesel" => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber)   // Output == 33
// console.log(typeof stringNumber)   // Output == string

// ******************************* Operations ******************************* //

let value = 3
let negValue = -value 
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%3)

let str1 = "hello"
let str2 = " nikhil"

let str3 = str1 + str2
// console.log(str3)  // Output == hello nikhil

// The problem
// console.log("1" + 2)   // Output == 12
// console.log(1 + "2")   // Output == 12

// console.log("1" + 2 + 2)  // Output == 122
// console.log(1 + 2 + "2")  // Output == 32

// console.log(true)  // Output == true
// console.log(+true)  // Output == 1
// console.log(true+)   // Output == throw error

// console.log(+"")  // Output == 0

// let gameCounter = 100
// gameCounter++
// console.log(gameCounter)

// let gameCounter = 100
// ++gameCounter
// console.log(gameCounter)

// See the documentation for more stuffs.