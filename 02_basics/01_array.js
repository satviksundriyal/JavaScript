//array
//js array are resizable(can contain more element even after declration)
//can contain mix 
//eg.
//const myArr = [0,1,2,3,4,5,true, "satvik"]  



const myArr = [0,1,2,3,4,5] 

// console.log(myArr[2]);    //to access array elements


//*******array create shallow copy if we perform any copy operation
//shallow copy of an object: whose properties share the same references
//deep copy of an object: do not share same object


//Types to declare array
const mySubject =["dbms", "webdev"]
const myArr2 = new Array(1,2,3,4)//(//direct values eg. 1,2,3..)
// console.log(myArr[0]);
// console.log(mySubject[0]);  //dbms


//*****************************methods


myArr.push(6);   //add value at last
// console.log(myArr);


myArr.pop()     //no parameters needed. remove the last value
// console.log(myArr);



myArr.unshift(9)    //add given value at start and shift the array
 //console.log(myArr);


myArr.shift()       //no parameter given. remove first elemnt and shift the array
//console.log(myArr);


// console.log(myArr.includes(9));   //false
// console.log(myArr.indexOf(9));    //-1
// console.log(myArr.indexOf(3));    //give the index


const myArr3 = myArr.join()
// console.log(typeof myArr3);   //it also convert array to string
// console.log(myArr);



//++++++++++++++++++++slice and splice

console.log("A ", myArr);

const myNewArr = myArr.slice(1,3) //1st se 2nd tk
// console.log(myNewArr);
console.log("Slice ", myArr);

const myNewArr2 =myArr.splice(1,3)
// console.log(myNewArr2);
console.log("Splice ", myArr);
//so splice manipulate the whole array
