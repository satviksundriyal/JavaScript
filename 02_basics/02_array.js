const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
//console.log(marvelHeros);   //now it will give array into array(it take array as a data)

//op
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//in this there are only 4 char in array beacuse it take array as a data
//so if we want to access 3rd data it will give 
// console.log(marvelHeros[3]); 
// //and if we want to access inner array values
// console.log(marvelHeros[3][1]);  //flash
//not a recommnded method

//+++++use this instead

const allHeros = marvelHeros.concat(dcHeros);
// // console.log(allHeros);
//o/p==> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//return new array not like push 

//++++++another method(spread operator)bikharna(recommended)

const allNewHero = [...marvelHeros, ...dcHeros]
console.log(allNewHero);
//ouput we're getting is spread out==> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//seperate values, now its not array iske ek ek elemnt individual ho gye


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  //array in array
//handle this array
const handleArray = anotherArray.flat(Infinity)   //infinity is depth 

console.log(handleArray);



console.log(Array.isArray("satvik"))    //false(array nahi hai)
//convert to
console.log(Array.from("satvik"))    //it will convert it to in array  [ 's', 'a', 't', 'v', 'i', 'k' ]
console.log(Array.from({name: "satvik"}))   //intresting(give you an empty array)
//can't convert it to array beacuse here name is a key and "satvik" is value so we have to define ki kisko array banana key ko ya value ko?


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  //sb elemnts ko ek sath array mai convert
//o/p==>  [ 100, 200, 300 ]