//=====> two type of writing typeof()

//console.log(typeof score);   
//console.log(typeof (score));


//1)======> convert to number

let score = "33abc"  
//let score=null; pe output => 0
// let score =undefined;  pe output => NAN,
// let score=true; pe output=>1, 
//let score= "satvik"; pe output => NAN

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
//console.log(valueInNumber);      //o/p => NAN(Not a Number)


//2)=====>convert to boolean

let isLoggedIn =1
//let isLoggedIn = 0  =>false
//let isLoggedIn = ""  =>false
//let isLoggedIn = "satvik"  =>true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   //o/p => 1

//3)=====>convert to string

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);  // o/p => 33 (look like num but it is a string)
console.log(typeof stringNumber);   //o/p => string


//********************************** Operation ********************************
//1
let value = 3
let negtValue = -value
console.log(negtValue);    //o/p  ==> -3

console.log(2**3); // two to power 3

let str1 ="hello"
let str2 = " satvik"
let str3 = str1+str2;
console.log(str3);


//2
// console.log(1+ "2");    //o/p==>12
// console.log("1" +2);    //o/p ==>12
// console.log("1" + "2");  //op==> 12
// console.log("1" + 2 + 2);   //o/p==>122

// //***imp down
// console.log(1 + 2 + "2");    //o/p 32

console.log(true);
console.log(+true);    //o/p==> 1 not recommended
//console.log(true+);     // throw error
console.log(+"");        //o/p==> 0 not recommended

let num1, num2, num3

num1=num2=num3=2+2       //not recommended (all have a=4, b=4, c=4)


let gameCounter = 100
gameCounter++;
console.log(gameCounter);    //o/p==>101


//*********Comparison********
//avoid!!
// console.log(2>1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(2==1);

console.log("2">1);                //o/p-true(two diff data type) JS convert it to number
console.log("02">1);               //o/p-true


console.log(null > 0);             //false
console.log(null == 0);             //false
console.log(null >= 0);            //true
/*the reason is that an equality check(==)
and comparisons(>,<<>=,<=) work differently
comparison=> convert null to a number, treating it as 0
**
thats why (null>=0) is true and (null>0) is false
**
*/

console.log(undefined == 0);
console.log(undefined < 0);  //and many more
//it will always give false


//Strict check(===) the datatypes if not same directly give false

console.log("2"===2);

//avoid them

