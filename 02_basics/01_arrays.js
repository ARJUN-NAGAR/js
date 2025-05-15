
const arr=[1,2,3,4,5]
//console.log(arr[0])  // 1

const arr1=new Array(1,2,3,4)
//console.log(arr1[1]) // 2

// Array Methods

arr1.push(5);
arr1.push(6);          //  add value to the end
arr1.pop();            //  remove value from the end


// console.log(arr1);
// arr1.unshift(8);        // add value at the start
// console.log(arr1)   
// arr1.shift();           // remove value from the start
// console.log(arr1)     

// console.log(arr1.includes(11));  // return boolean value;     false
// console.log(arr1.indexOf(2));    // tells he index of the number

// const arr2=arr1.join();
// console.log(arr2)    //  output : 1,2,3,4,5    typeof : string


// slice , splice

console.log("A ",arr1)
const myarr=arr1.slice(1,3)  // output : [2,3]
console.log(myarr)
console.log("B ",arr1);
console.log(arr1.splice(1,3))     // [2,3,4]  //  in this origonal array is upadated; from  1 to 3 is removed from origonal array
console.log(arr1)    //  [1,5]