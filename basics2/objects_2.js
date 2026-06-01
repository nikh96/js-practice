 // const tinderUser = new Object()    // Singleton Object

 const tinderUser = {}     // Non-singleton Object

 tinderUser.id = "123abc"
 tinderUser.name = "Diesel"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser)

const regularUser = {
    email: "diesel@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vin",
            lastname: "diesel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
// console.log(obj3)   // Output == nested object returns objects inside object and so on.

const obj4 = Object.assign(obj1, obj2)
// console.log(obj4)   // Output == { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5)   // Output == { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const newObj = {...obj1, ...obj2}
// console.log(newObj)   // Output == { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "diesel@gmail.com"
    },
    {
        id: 2,
        email: "vin@gmail.com"
    }
]


users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))  // Output datatype == Array
// by same method we can console value of object.

// console.log(Object.entries(tinderUser))   // Output includes Array inside Array make pairs of key value in array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))   // Output == true

