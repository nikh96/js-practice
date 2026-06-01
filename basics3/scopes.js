// let a = 10
// const b = 20
// var c = 30

// {}   // curly braces are scopes

// console.log(a)
// console.log(b)
// console.log(c)

// var c = 300   // global scope

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20     // block scope
//     console.log("INNER: ", a)     // Output == 10
// }
 
// console.log(a)   // Output == 300
// console.log(b)


// Nested scopes

// function one(){
//     const username = "diesel"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }

//     // console.log(website)   // throws errow cause of block scope function one can't access "website"
    
//     two()
// }

// one()

// child functions can access parent function but vice versa is not true


// if (true) {
//     const username = "diesel"
//     if (username === "diesel") {
//         const website = " youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
// }

// console.log(username)


// ++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++ //

// console.log(addone(5))  // prints 6 below function runs without any error
function addone(num){
    return num + 1
}


// Expression (we can say it function)
// console.log(addTwo(5))   // throws a error of intialization
const addTwo = function(num){
    return num + 2
}


