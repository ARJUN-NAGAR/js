
const tinderuser=new Object();  // a singleton object
// const tinderuser={}  // not a singleton object
//console.log(tinderuser)
tinderuser.id="abc"
tinderuser.email="xyz@google.com"
tinderuser.name="sam"
tinderuser.isloggedin=false
//console.log(tinderuser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "arjun",
            lastname: "nagar"
        }
    }
}
//console.log(regularUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }   //  //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2, obj4)  // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}  // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3)         


const user=[
    {
        id :1,
        email: "abc@gmail.com"
    },
    {
        id :1,
        email: "abc@gmail.com"
    },
    {
        id :1,
        email: "abc@gmail.com"
    }
]
console.log(user[1].email)
console.log(Object.keys(tinderuser));  // output : [ 'id', 'email', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser));  // output : [ 'abc', 'xyz@google.com', 'sam', false ]
console.log(Object.entries(tinderuser));  // output : [[ 'id', 'abc' ],[ 'email', 'xyz@google.com' ],[ 'name', 'sam' ],[ 'isloggedin', false ]]


console.log(tinderuser.hasOwnProperty('isloggedin'));  // true ;  here keys are properties





const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
// first API comes in XML langusge now comes in jason; jason is nothing but object.  down below
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//   API in array format
//   jason formatter to understand API
[
    {},
    {},
    {} 
]
