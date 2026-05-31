// console.log(2 > 1)   // Output == true
// console.log(2 >= 1)  // Output == true
// console.log(2 < 1)   // Output == false
// console.log(2 == 1)  // Output == false
// console.log(2 != 1)  // Output == true


// do not compare different data types
// console.log("2" > 1)    // Output == true
// console.log("02" > 1)   // Output == true

// console.log(null > 0)   // Output == false 
// console.log(null == 0)  // Output == false
// console.log(null >= 0)  // Output == true0

/* 
The reason is that an equlity check == and comparisons > < >= <= works diffently.
Comparisons convert null to a number, treating it as 0.

That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(undefined == 0)  // Output == false also for all the comaprisons with 0

// === Strict Check === //

console.log("2" === 2)   // Output == false