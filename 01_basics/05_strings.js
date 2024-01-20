const name = "satvik"
const repoCount = 50

//console.log(name + repoCount + "value" );  //this syntax is not recommended

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`);


//another way to declare string

const gameName = new String('satvik-s')
console.log(gameName[0]);
console.log(gameName.__proto__);

//***********************Methods


//console.log(gameName.length);
//console.log(gameName); //it does'nt change the og string beacause of stack(premitive data type)
console.log(gameName.charAt(3)); //==> v

console.log(gameName.indexOf('t'));   // t at shich position

console.log(gameName.substring(4,6));   //(start,end) ignore -ve
 const newString = gameName.slice(-6,4)  //can be -ve
 console.log(newString);

 const newString1 = "    satvik    "  //spaces
 console.log(newString1);             //include spaces
 console.log(newString1.trim());     //remove spaces


 const url = "https://satvik.com/satvik%20s"
 console.log(url.replace('%20', '-'));      //replace(jise replace karna, jis se krna)
console.log(url.includes('satvik'))   //true

console.log(gameName.split('-'));
