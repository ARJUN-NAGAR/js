
let score=33
console.log(typeof score)
score="33"
console.log(typeof score)
let valueinnum=Number(score)

console.log(typeof valueinnum)
score="33abc"
valueinnum=Number(score)
console.log(typeof valueinnum)
console.log(valueinnum)

score=null
console.log(score)
console.log(typeof score)

score=true
score=Number(score)
console.log(score)
console.log(Number(false))

let result = '5' + 2;  // "52"  (number 2 is converted to string)
let result2 = '5' - 2; // 3     (string '5' is converted to number)
let result3 = true + 1; // 2    (true is converted to 1)
console.log(result)
console.log(typeof result)
console.log(result2)
console.log(typeof result2)
console.log(result3)
console.log(typeof result3)


score =+"123"
console.log(score)
console.log(typeof score)


score=123
console.log(typeof String(score))
console.log(typeof score.toString())
console.log(parseInt(123.456))
console.log(typeof parseInt(123.456))
console.log(parseFloat(123.456))
console.log(typeof parseFloat(123.456))


Boolean(0);         // false
Boolean(1);         // true
Boolean("");        // false
Boolean("hello");   // true
