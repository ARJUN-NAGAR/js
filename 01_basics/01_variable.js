
//  lets learn how to make variables.

const accid=12345  // it shows constant value. can't be updated
let acc_email="abc@gmail.com" // var and let used for declaring variables in js
var acc_pass="12345"

// accid=4   not allowed   tried to update constant value, resulting in error

console.log(accid)

acc_email="xyz@gmail.com"   // here acc_email will be updated
console.log(acc_email)

acc_pass="1234589"  // here acc_pass will be updated
console.log(acc_pass)

// create table with index and values. here index=0,1,2 referenced to your table value input
console.table([accid,acc_email,acc_pass]) 


/*
 prefer let over var 
 because of issue in block scope and functional scope; note: scope are {}
 */