const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Diesel"
tinderUser.isLoggedIn = false

// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Diesel"
}

// course.courseInstructor

const {courseInstructor} = course

// console.log(courseInstructor)  // Output == Diesel

const {courseInstructor: instructor} = course
// console.log(instructor)   // Output == Diesel



/* json Structure
{
    name: "diesel",
    coursename: "js in hindi",
    price: "free"
}

keys are usually a string and values are also string in json structure.
*/


/*  sometimes APIs responsea are in Arrays structure. see the following structure.
[
    {},
    {},
    {}
]
*/