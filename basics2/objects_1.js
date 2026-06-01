// singleton - single object in itself made using constructor

// Objects literals
// Object.create   // constructor method (makes singleton)

const mySym = Symbol("key1")

const jsUser = {
    name: "Diesel",
    [mySym]: "mykey1",
    age: 20,
    location: "Yorkshire",
    email: "vindiesel@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)   // not the right way to do but it is correct // Output == vindiesel@gmail.com
// console.log(jsUser["email"])  // Output == vindiesel@gmail.com  // right and correct way to do that 
// console.log(jsUser[mySym])   // type == Symbol

jsUser.email = "dieselvin@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "vindieselgoogle@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

// console.log(jsUser.greeting)   // Output == [Function (anonymous)]
// console.log(jsUser.greeting())  // Output == hello js user, undefined

console.log(jsUser.greetingTwo())