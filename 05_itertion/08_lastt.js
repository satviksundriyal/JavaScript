//reduce

// //by normal function
// const nums =[1,2,3]
// const myNum= nums.reduce(function(acc, currval){
//     console.log(`Acc ${acc} and CurrVal ${currval}`);
//     return currval+acc
// },0)
// console.log(myNum);

//by arraow function

// const nums =[1,2,3]
// const myNums=nums.reduce((acc,currval)=>currval+acc,0)
// console.log(myNums);


const shoppingCart =[
    {
        itemname: "javascript",
        price: 3000,
    },
    {
        itemname: "java",
        price: 5999,
    },
    {
        itemname: "cpp",
        price: 12000,
    },
    {
        itemname: "ds",
        price: 13000,
    },


]
const price=shoppingCart.reduce((acc,itemname)=>acc+itemname.price,0)
console.log(price);