const userEmail= "s@gmail.com"

// if(userEmail){    //no comparison (maan liya ki string k anadr true hai agar empty rkhe to else)
//     // console.log("got user email");
// }
// else{
//     console.log("don't have email");
// }


//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
//all falsy, "0"(string mai 0), 'false'(false string k anadar), " "(space in string), [], {}, function(){}//empty fn

//how to check array
// if(userEmail.length === 0)
// {
//     console.log("empty");
// }

//how to check whether obj is empty or not
const emptyObj ={}
if(Object.keys(emptyObj).length===0){
// console.log("empty");
}

// Nullish Coalescing Operstor(??): for null, undefined
//for handelling error
let val1;
// val1 = 5 ?? 10
// console.log(val1);   //5
// val1 = null ?? 10
// console.log(val1);

val1 = undefined ?? 10
console.log(val1)

//ternary operator ?
const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");