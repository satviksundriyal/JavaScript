//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


//create own date

let myCreatedDate = new Date("01-14-2023")   //Month start from 0
console.log(myCreatedDate.toDateString());  //YYYY-MM-DD


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



//otheroperation

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDay.getDay()} and the time is..

newDate.toLocaleString('default', {
    weekday: "long",  //can define type

})
console.log(newDate);