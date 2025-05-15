// const { captureOwnerStack } = require("react");
// datatypes
    // primitive
        // 7 types
            // String
            // Number
            // Null
            // Boolean
            // Undefined
            // Symbol
            // Bigint

    
    
    // reference type or non primitive
        // Arrays
        // Objects
        // Function


// JavaScript is a dynamica type language. here you don't need to declare variable
// const id=Symbol("11")
// const id1=Symbol("11")

// console.log(id===id1)
// /*const num=9234567891254354857443456789009876543212345678098765432345678998765433456783678765444567
// const num1=46644646466464646477777777777777777777777777777777777777777777777777777777777777777777777777777777777777n*/

// console.log(num)
// console.log(num1)

// ------------------------------- memory ------------------------------

//Stack(primitive), heap(reference)

//in primitive : 
// let score=10
// let score2=score
// score2=11
//console.log(score) // 10
//console.log(score2) // 11    creates copy of score and changes to 11.

// in non primitive
// variable is stored in stack while value in heap
// note that variable is given referenced to value in heap
// let user1={
//      name="abc"
//      num=11
// }
// let user2=user1
// user2.num=15
// console.log(user2.num)  // 15  user2 changes the num value in heap to 15 
// console.log(user1.num)  // 15  get reference to value in heap