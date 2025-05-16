
// function calculateprice(num1){
//     return num1
// }
// console.log(calculateprice(2)) // output :2
/*function calculateprice(...num1){    // rest operator 
    return num1
}
console.log(calculateprice(200,400,600,800)) // output :[ 200, 400, 600, 800 ]*/
function calculateprice(val1,val2,...num1){    // rest operator 
    return num1
}
console.log(calculateprice(200,400,600,800,1000)) // output : [ 600, 800, 1000 ]; nu1 refers to the array created;

const user={    
    username:"Arjun",
    price:499
}
function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
}
console.log(user)

//handleobject(user)
handleobject({
    username:"Arjun Nagar",
    price:999
})

const newarr=[100,200,300,400]
function returnsecondvalue(array){
    return array[1];
}
console.log(returnsecondvalue(newarr))
