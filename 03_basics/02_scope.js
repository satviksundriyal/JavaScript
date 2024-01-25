//var c = 300   //global scope

let a = 200

if(true)
{//scope
let a = 10   //block scope
const b =20
// var c =30
// console.log("Inner A: ",a);

}  
// console.log("Outer A",a);   
// console.log(b);   //undefined
// console.log(c);   //30  by that we don't use var beacuse var leaks the scope 


//nested scope++++++++++++++

function one(){
    const username ="satvik"

    function two(){
        const website="yt"
        console.log(username);
    }

    // console.log(website);
    two()
}
one()


// +++++++++++++++++++++++++++++intresting++++++++++++
addtwo(5)    // can decalre fn here(hoisting) 
function addone(num){
    return num+1
}
addtwo(6)    //can't because in this we declare the fn isn var named addtwo
var addtwo = function(num)
{
    return num+2
}
// addtwo(5)
// addtwo(6)
