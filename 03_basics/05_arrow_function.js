
const user={
    username:"Arjun",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

}
// user.welcomemessage()
// user.username="Arjun Nagar"
// user.welcomemessage()

//console.log(this)   // {}


// function chai(){
//     username:"ARJUN",
//     console.log(this.username)   // output : undefined; works only in object
// }
// chai()

// const chai = function(){
//     username:"ARJUN"
//     console.log(this.username)  // undefined
// }
// chai()

const chai = ()=>{                    // Arrow function syntax
    username:"ARJUN"
    console.log(`${this.username}`)  // undefined
}
//chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
//const addtwo=(num1,num2)=> num1+num2;    // implicit type; no need to use return when we don't use {}
const addtwo=(num1,num2)=> {username:"ARJUN"}  // UNDEFINED
console.log(addtwo(3,4))