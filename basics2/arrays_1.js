// array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0])   // Output == 0

// arrays make shallow copies in javascript while copy.

// Declaring Arrays
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
// myArr.push(6)  // Adds 6 to the last of myArr
// myArr.push(7)  // Adds 7 to the last of myArr
// myArr.pop()    // removes last index value of myArr

// myArr.unshift(9)   // 9 added to the start of the myArr
// myArr.shift()     // removes first index value


// console.log(myArr.includes(9))  // Output == false (boolean value)
// console.log(myArr.indexOf(3))   // Output == 3
// console.log(myArr.indexOf(79))  // Output == -1 (if the value is not in the Array it gives -1)

const newArr = myArr.join()

// console.log(myArr)

// console.log(typeof newArr)  // Output == String

// slice, splice
// console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

// console.log(myn1)  // Output == [1, 2]
// console.log("B: ", myArr)    // Output == [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)  // It manipulates the original array. 

// console.log(myn2)   // Output == [1, 2, 3]
// console.log("C: ", myArr)  // Output == [0, 4, 5]
