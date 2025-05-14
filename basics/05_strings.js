
let name="arjun"
let age=19
//console.log(name+count)   old method
console.log(`hello my name is ${name} and i am ${age} years old.`);  // use backticks not inverted commas
// also known as string interpolaration

const newname=new String('arjun')
console.log(newname[0])  // a
console.log(newname.__proto__)// object  {}
console.log(newname.length)  // 5
console.log(newname.toUpperCase())  // ARJUN
console.log(newname.charAt(2))  //j
console.log(newname.indexOf('n'));