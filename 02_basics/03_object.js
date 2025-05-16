
// singleton  : made from using constructor

// object leteral
//Object.create()      //singleton object method


const mysym=Symbol("key1")

const user={
    "full name":"arjun",
    [mysym]:"mykey1",
    age:19,
    email:"abc@google.com",
    location:"agra",
    isloggedin:false,
    lastloggedin:['Monday','Tuesday']
}

// console.log(user.age)       // output : 19 // ways to access the object
// //   string method to access the object user; 
// console.log(user["age"])   // output :19
// console.log(user["full name"])  // can't be accessed with '.' method, you can only use string method

// console.log(user[mysym])  // mykey1


user.email="abc@chatgpt.com";  // change the email
//Object.freeze(user);           //  object is freezed
user.email="xyz@google.com";   // object is changed again

console.log(user);

user.greeting=function(){
    console.log("js user")
}

console.log(user.greeting())  
console.log(user.greeting)   // output : [Function (anonymous)]; its reference  here function is not executed

user.greetingtwo=function(){
    console.log(`hello js user,${this["full name"]}`)
}

console.log(user.greetingtwo())