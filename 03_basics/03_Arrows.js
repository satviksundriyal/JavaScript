const user = {
    username: "satvik",
    price: "199",
    welcomeMsg: function(){
       // console.log(`${this.username}, welcome to website`); // "this" for to refer current context jitne var is scope ke anadar h unhe access krne k liye
        // console.log(this);   //current value here two first satvik wali second sam
    }

}
// user.welcomeMsg()
// user.username= "sam"   //value changed context(jiske baare m baat ho rahi)
// user.welcomeMsg()
// console.log(this);    //now current context empty global k anadr koi context nahi pr browser mai esa nahi hota waha kyoki context window hota h






// function chai(){
//     let username= "satvik"
//     console.log(this.username);   //function k anadr agr this kre (node k andar) to bahut value aati hai
// }
// chai()


//how to decalre fn by arrow fn

// const chai = function(){
//     let username= "satvik"
//     console.log(this.username);//undefined
// }
// chai()


// const chai = () => {    //arrow fn
//     let username= "satvik"
//     console.log(this);//undefined
// }
// chai()


//Arrow function++++++++++++++++++++++++++++

//Explicit return

//basic arrow fn syntax
// const addTwo = (num1,num2)=>{
//     return num1+num2               //curly braces use to return must hai
// }
// console.log(addTwo(2,4));


//Implicit return
//another way
//const addTwo = (num1,num2) => num1+num2  or
// const addTwo = (num1,num2) => (num1+num2)   //yaha return nahi parenthesis pr
// console.log(addTwo(2,4));

//object return krna hai to
const addTwo = (num1,num2) =>({username: "satvik"})   //bina parenthesis k object nahi kr skta kaam
console.log(addTwo(2,4));

