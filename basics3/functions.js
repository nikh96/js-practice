// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// // addTwoNumbers()  // Output == NaN
// // addTwoNumbers(3, 4)   // Output == 7

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)   // Output == undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)   

function loginUserMessage(username = "sam"){
    if(!username){                                            // username by default is undefined
        console.log("Please enter a username")                // "" is treated as false (empty string)
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("diesel"))
// console.log(loginUserMessage())   // Output == undefined just logged in

// ... regferred as rest/spread operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))   // Output gives an Array of all the prices


const user = {
    username: "diesel",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600]))