const score = 400;
console.log(score);  //o/p 400

//****************************Methods on number********
const balance = new Number(100)  //100 % it is number
console.log(balance);   // o/p [Number: 100]
console.log(balance.toString());  //ab ye number convert ho chuka hai string mai, so now we can use string fn as well
//eg
//Using string f n after converting number to string

console.log(balance.toString().length);  //o/p==>3(100 mein 3 char hai)


console.log(balance.toFixed(2));  //o/p==>100.00(up-to 2) for calculation like in e-commerce website

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));  //o/p==>124(round-off)
console.log(otherNumber.toPrecision(2));  //o/p==> 1.2e+2


const anotherNumber = 1000000
console.log(anotherNumber.toLocaleString());  //o/p==> 1,000,000(US precision)

//for Indian value
console.log(anotherNumber.toLocaleString('en-IN'));



// *********************Maths****************8

console.log(Math);    //Math is a object
console.log(Math.abs(-4)); //absoulte value

console.log(Math.round(4.3));  //round off
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.sqrt(4));
console.log(Math.min(4,5,4,3,5,1));


//random
console.log(Math.random()); //between 0 and 1
console.log(Math.random()*10 + 1); // min value=1
console.log((Math.random()*10) + 1);


//trick
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1))+min);

