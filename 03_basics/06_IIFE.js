      //  IIFE   :   Immediately Invoked Function Expressions (IIFE)
// function chai(){
//     console.log("DB Connected")
// }
// chai()
              //  to remove the pollution of global scope, we are using IIFE

(function chai(){
    console.log("DB Connected")              // named IIFE
})();                                     
//   ()()    FIRST : expression or reference, second : execution 


((name) => {
    console.log(`DB Connected,${name}`);       // Simple IIFE
})('ARJUN')