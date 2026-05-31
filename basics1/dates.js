// Dates

let myDate = new Date()   // It's a Object in Javascript

// console.log(myDate.toString())   // Output == Sun May 31 2026 13:24:55 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  // Output == Sun May 31 2026
// console.log(myDate.toISOString())   // Output == 2026-05-31T13:24:55.346Z
// console.log(myDate.toJSON())        // Output == 2026-05-31T13:24:55.346Z
// console.log(myDate.toLocaleDateString())  // Output == 5/31/2026
// console.log(myDate.toLocaleString())      // Output == 5/31/2026, 1:24:55 PM
// console.log(myDate.toLocaleTimeString())    // Output == 1:24:55 PM
// console.log(myDate.toTimeString())     // Output == 13:24:55 GMT+0000 (Coordinated Universal Time)

// Months starts with 0 in Javascript 
let myCreatedDate = new Date(2023, 0, 23)
let anotherCreatedDate = new Date(2023, 0, 23, 5, 3)
let yymmddDate = new Date("2023-01-14")   // Here month will start from 1 i.e. January

// console.log(myCreatedDate.toDateString())         // Output == Mon Jan 23 2023
// console.log(anotherCreatedDate.toLocaleString())  // Output == 1/23/2023, 5:03:00 AM
// console.log(yymmddDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// We can use more methods see mdn
// always compare in milliseconds

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())


newDate.toLocaleString('default', {
    weekday: "long",
})