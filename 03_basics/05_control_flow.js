// //if
// if(2=="2"){
// console.log("executed");
// }
// //  ===: if(2===2)  (strictly)

// if(2==="2"){
//     console.log("executed");
//     }

// //==!
// if(2=="2"){
//     console.log("executed");
//     }

const score = 200
if(score>100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);  //can't accessible but not in var

const balance =1000
// if(balance > 500)  console.log("test");  //implicit scope (but in single line is prefered)
 
// if(userLoggedIn && debitcard && 2==2){
//     console.log("allow");
// }



const loggedInFromEmail = true
const loggedInFromOutlook = false

if(loggedInFromEmail || loggedInFromOutlook)
{
    // console.log("approved");
}


//switch
// const month =5
// switch(month){
//     //if cases are string
//     //case "jan": 
//     case 1:   //agar break na lagaye to wo pura code excute krta hai except deafult
//          console.log("Jan");
//     break;
//     case 3:
//          console.log("Feb");
//     break;
//     case 4:
//          console.log("March");
//     break;
//     default:
//     console.log("deafult")
//     break;    
// }