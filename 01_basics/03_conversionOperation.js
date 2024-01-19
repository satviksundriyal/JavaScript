//=====> two type of writing typeof()

//console.log(typeof score);   
//console.log(typeof (score));


//======> convert to number

let score = "33abc"  
//let score=null; pe output => 0
// let score =undefined;  pe output => NAN,
// let score=true; pe output=>1, 
//let score= "satvik"; pe output => NAN


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
//console.log(valueInNumber);      //o/p => NAN(Not a Number)




//=====>convert to boolean
let isLoggedIn =1
//let isLoggedIn = 0  =>false
//let isLoggedIn = ""  =>false
//let isLoggedIn = "satvik"  =>true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   //o/p => 1






//=====>convert to string

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);  // o/p => 33 (look like num but it is a string)
console.log(typeof stringNumber);   //o/p => string