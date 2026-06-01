const user = {
    username: "diesel",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`)   // this means current context
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "vin"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "diesel"
//     console.log(this.username)   // undefined 
// }

// chai()

// Arrow function
const chai = () => {
    let username = "vin"
    console.log(this.username)
}

// chai()


const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3, 4))


//Implicit return 

// const addNumbers = (num1, num2) => ( num1 + num2 )
// console.log(addNumbers(3, 4))

// const return_object = (num1, num2) => {username: "diesel"}
// console.log(return_object())     // undefined

const return_object = (num1, num2) => ({username: "diesel"})
console.log(return_object())     // it returns, when we used parenthesis outside object.

// while using curly braces in arrow function explicitly includes return keyword.
// If we are using parenthesis (see line no. 43) no need to write return keyword.
