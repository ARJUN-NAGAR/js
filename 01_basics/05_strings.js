
// let name="arjun"
// let age=19
// //console.log(name+count)   old method
// console.log(`hello my name is ${name} and i am ${age} years old.`);  // use backticks not inverted commas
// // also known as string interpolaration

// const newname=new String('arjun')
// console.log(newname[0])  // a
// console.log(newname.__proto__)// object  {}
// console.log(newname.length)  // 5
// console.log(newname.toUpperCase())  // ARJUN
// console.log(newname.charAt(2))  //j
// console.log(newname.indexOf('n'));// index of n : 4

// const newstring=newname.substring(0,4);

// console.log(newstring);
// const nstring=newname.slice(-4,4);
// console.log(nstring);
// name="          arjun           "
// console.log(name)
// console.log(name.trim());    trim the whitespaces from both left and right
const url="https://arjun%20.com/"

console.log(url.replace('%20','-'));

console.log(url.includes('anushka'));