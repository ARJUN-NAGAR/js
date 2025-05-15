//                   IN JS MONTH IS STARTED FROM ZERO
// let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())  //      Thu May 15 2025 10:56:55 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())  //     Thu May 15 2025
// console.log(mydate.toLocaleString())   //  5/15/2025, 10:56:55 AM 
// console.log(mydate.toLocaleDateString())  // 5/15/2025
// console.log(typeof mydate)  // object instance
// let createddate=new Date(2025,4,15)
// console.log(createddate.toDateString())             //  Thu May 15 2025  
// let createdate=new Date(2025,4,15,18,20,11)
// console.log(createdate.toLocaleString())            //   5/15/2025, 6:20:11 PM

let createdate=new Date("01-11-2025")    // format :month-date-year
//console.log(createdate.toLocaleString())


// let mytime=Date.now()
// console.log(mytime)
// console.log(createdate.getTime())        //   tells the millisecond since 1970 jan 1;   unix approch
// console.log(Math.floor(Date.now()/1000))


let datenew=new Date();
console.log(datenew);  //   2025-05-15T12:44:55.907Z
console.log(datenew.getDay());  //  4
console.log(datenew.getMonth()+1);   //  5
console.log(datenew.getTime());  //   1747313095907
//`${datenew.getDay()}`  and the time
console.log(datenew.toLocaleString('default',{
    weekday:"long"

}))