//Premitive(call by value hote hai isme hamee original memory ka refernce nahi diya jata copy kar ke diya jata hai. So hum jo bhi changes krte hai wo copy wale m krte hain)
/*
7 types:
String, Number, Boolean, null, undefined, Symbol(unique), BigInt
*/

//Question: Is JS is dynamically types or statically typed =>  dynamically(because like in const we don't have to declare data type)
const score =110
const isLoggedIn= true
const outsideTemprature= null
let userEmail;   //so here no need to declare data types


//symbol
const id = Symbol('123')
const anotherId = Symbol('123')  //these are two diff things
//check
console.log(id == anotherId);   //false

//BigInt conversion
const bigNumber = 32323232356887565623232n // so we put 'n' at last to convert it to big int



//Reference Type(Non-Primitive)(Inka memory mai reference directly hame diya jata hai)

/*
Array, Objects, Functions
*/
const city = ["uk", "up"];  //arrays

//Object
let myObject = {
    name: "satvik",
    age: 22,
}

//Functions
const myFunction = function(){
    console.log("Hello World");
}
myFunction()


console.log(typeof bigNumber);     //bigint=>bigint(return-type)
console.log(typeof outsideTemprature);  //null =>object
console.log(typeof score);              //number =>number
console.log(typeof myFunction);         //function => function
console.log(typeof myObject);           //object => object
//string => string
//undefined=> undefined
//symbol=>symbol








//*********************************** Memory******************************************

//Stack() => used in Primitive(var ka copy milta hai)
//Heap() => used in Non-Primitive(reference milta h og value ka )

//Primitive
let myYoutubeName = "satvik"

let anotherName = myYoutubeName;
anotherName = "satviksundriyal"
console.log(anotherName);     //satviksundriyal
console.log(myYoutubeName);   //satvik


//Non-Primitive
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne    //SAME REFERENCE

userTwo.email = "abc@google.com";
console.log(userOne.email);  //dono mai change hoga
console.log(userTwo.email);   //because of direct referecne