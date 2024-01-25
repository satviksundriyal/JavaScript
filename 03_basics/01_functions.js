// console.log("S");
// console.log("A");
// console.log("T");
// console.log("V");
// console.log("I");
// console.log("K");

function sayMyName(){
console.log("S");
console.log("A");
console.log("T");
console.log("V");
console.log("I");
console.log("K");
}
//sayMyName()    //execution/refernce structure


function addTwoNum(num1, num2){    //num1 and num2 are parameters here
// console.log(num1+num2);
}
//addTwoNum()     //NAN
//addTwoNum(3, 4)   //4              //3,4 are arguments
const result1 = addTwoNum(3,5)
//console.log("Result: ", result);  //undefined?(beacuse there is difference in console and execute)                                             
 


//so how it will done correctly 
function addTwoNum(num1, num2){   
    let result = num1+ num2
    return result
    console.log("satvik");  //after return no code will work
}
const result = addTwoNum(3,5)
//console.log("Result: ", result); 


// function loginUserMessage(username){
//     if(username === undefined)
//     {
//         console.log("Please enter username");
//         return;
//     }
//     return `${username}  just logged in`
// }
// // console.log(loginUserMessage("Satvik"))
// console.log(loginUserMessage())   //undefined

// function loginUserMessage(username){
//     if(!username)
//     {
//         console.log("Please enter username");
//         return;
//     }
//     return `${username}  just logged in`
// }
// // console.log(loginUserMessage("Satvik"))
// console.log(loginUserMessage())   //undefined

function loginUserMessage(username="sam"){    //default value if you write value it overwrite sam
    if(!username)
    {
        console.log("Please enter username");
        return;
    }
    return `${username}  just logged in`
}
// console.log(loginUserMessage("Satvik"))
// console.log(loginUserMessage())   //undefined



//eg for shopping cart==> where we don't know how many argument will come like in order
// function calculateCartPrice(...num1)
//function calculateCartPrice(val1,val2,...num1){   // ...convert it to array, ab val1 200 val2 300 so output ayega 400
// return num1}

// console.log(calculateCartPrice(200,300,400));
//let cart is growing we have "rest" operator (...) convert it into array


const user = {
username: "satvik",
price: 199    //if we write wrong key it will give undefined
}

function handleObj(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObj(user)
//can pass obj direct
handleObj({
    username: "sam",
    price: 19
})

//can pass array
const myNewArray = [200,330,600]
function returnSecondVal(getarray)
{
return getarray[1]
}
// console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([100,900]));