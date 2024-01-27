//Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


//remove Pollution by gloabal scope
(function chai2(){
    //named iife (name=chai)
    console.log(`DB CONNECTED`);
})
();  //semicolon must to end iife to run second code


//syntax
/*
()()  parenth se ek block bn jata h
*/

// ((name) =>{
//     console.log(`DB 2 CONNECTED ${name}`);
// })("satvik")  //it is a fn