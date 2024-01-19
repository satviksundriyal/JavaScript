const accountId = 144553
let accountEmail = "satvik@gmail.com"
var accountPassword = "12345"
let accountState;    //undefined

accountCity = "UK"    //not recommended bus possibility of this is still there


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


//accountId = 2  //not allowed (constant)node 01    
accountEmail = "s@gmail.com"
accountPassword= "2121"
accountCity = "US"

console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountPassword, accountState])
