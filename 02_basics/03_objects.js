//2 way to define object(literal and constructor)

//singleton: jab hum constructor se object banate hain
///literal mai singleton nahi bnta

//OBJECT LITERAL

//define object
//Object.create ye ek tareeka hai object banane ka jise bolte hai constructor ke through(singleton)

const mySymbol = Symbol("key1")  //ise refer kr rehe hai


const jsUser = {
//symbol ko as a key kainse use kre?

    // mySymbol: "new key1", //not a good way
    [mySymbol]: "new key1",  //by this we can use this as symbol(correct syntax)

    name: "Satvik" ,     //key:value   (isme name ek key jise object ne string mana hai)
    "full name": "Satvik Sundriyal",  //is value ko hum ab dot(.(jsUser.)) se acess nahi kr skte
    age: 18,
    location: "uk",
    email: "satvik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"]        //kuch bhi value de skte hai
}

//now how to acess object values

// console.log(jsUser.email);   //can use by this but not highly recommended
console.log(jsUser["email"]); 
console.log(jsUser["full name"]);  //can acess all types

// console.log(jsUser.mySymbol);   //it is treating it as string not by symbol so

console.log(jsUser[mySymbol]);  //now this syntax is fine and will treat as symbol so use [] this
//Symbol ko kainse access kre?




//++++++++++++++++++change value of object

jsUser.email = "satvik27@gmail.com"
console.log(jsUser["email"]); 


//lock the value

//Object.freeze(jsUser)
jsUser.email = "freezed@gmail.com"
console.log(jsUser["email"]);  //now no change will apply email will remain same
console.log(jsUser);   //it also define symbol


//functions

jsUser.greeting = function(){
    console.log("Hi js user");
}  

jsUser.greetingTwo = function(){
    console.log(`Hi js user, ${this.name}`);   //by 'this' we can use object property
}

console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 