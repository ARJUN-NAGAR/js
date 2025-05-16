
function one(){
    const username = "arjun"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // no error in execution

function addone(num){
    return num + 1
}



addTwo(5)    // hoisting error; addTwo is variable hold the function with return num+2; it is called before it is executed
const addTwo = function(num){
    return num + 2
}
