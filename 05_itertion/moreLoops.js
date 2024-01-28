//for of loop

const arr = [1,2,3,4,5]
// for (const iterator of object) { //object mtlb kis cheez k upr lagana h
    
// }
for (const num of arr) {  
    // console.log(num);
}

const greeting ="hello world"
for(const greet of greeting)
{
    // console.log(`${greet}`);
}



//Maps = unique value

const map = new Map()
map.set('IN', 'INDIA')
map.set('US', 'AMERICA')
map.set('JPN', 'JAPAN')
// console.log(map);

for (const [key,value] of map) {
console.log(key,value);
}

//for of on object(not iterable)

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA'
}
for (const val of myObj) {  //not itreable!!!!!
    console.log(val);
}