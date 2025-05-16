
// console.log("a")
// console.log("r")
// console.log("j")
// console.log("u")
// console.log("n")

function saymyname(){
    console.log("a")
    console.log("r")
    console.log("j")
    console.log("u")
    console.log("n")
}
//saymyname()  // execution of a function;   note: saymyname is reference while saymyname() is execution;

// function addtwonum(num1,num2){
//     console.log(num1+num2);   // console print; not a return value
// }
function addtwonum(num1,num2){
   let result =num1+num2
   return result
}
//console.log(typeof addtwonum(3,"a"))  //addtwonum(3,"a") shows the log value not the return value, so the typeof is undefined
const result=addtwonum(3,5)
console.log("result :",result)

// function loginuser(username){
//     return `${username} just logged in`
// }
// console.log(loginuser("arjun"))


// function loginuser(username="arjun"){   // overwriting the undefined condition when anything is not pssed on.
//     if(username==undefined){
//         console.log("Please enter a Username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginuser("ARJUN"))