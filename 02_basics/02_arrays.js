const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);   //  output : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
//  this shows that array in js can take any data, be its boolean or object itself unlike other language.
//console.log(marvel_heroes[3][1])

const new_heroes =marvel_heroes.concat(dc_heroes);
console.log(new_heroes);    // output : [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const all_heroes=[...marvel_heroes,...dc_heroes];   // same as concat but take upto n number of arrays
console.log(all_heroes)

const arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
// const an_arr=arr.flat();   // flatten the array
// console.log(an_arr);

const an_array=arr.flat(Infinity)   // flatten the array upto infinity
console.log(an_array);

console.log(Array.isArray("ARRAY"))   // return boolean if it is an array
console.log(Array.from("array"))  // output : ['a','r','r','a','y'];

 console.log(Array.from({name: "ARJUN"}))  // interesting case in array // output : []: empty array
// let score1=100;
// let score2=200;
// let score3=300;
// let score4=400;
// console.log(Array.of(score1,score2,score3));   // gives an array 

// // stude from MDN for array references