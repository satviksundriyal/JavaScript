// //map

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const  newNum = myNums.map((num) => (num+10))
// console.log(newNum);


//chaining(2-3 method ek sath like 2 map ya 1 map k andar 1 filter)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const  newNum = myNums
.map((num) => num*10)
.map((num)=>num+1)
.filter((num)=> num>=40)
console.log(newNum);