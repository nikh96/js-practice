const coding = ["js", "ruby", "java", "python", "cpp"]

// // Higher order function loop
// coding.forEach( function (val) {                           // callback functions
//     console.log(val)
// } )     

// coding.forEach( (item) => {
//     console.log(item)
// } )


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)    // only give refernce not execution of declared function


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )