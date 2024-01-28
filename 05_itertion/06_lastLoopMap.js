// const coding =["js", "java", "cpp", "ruby", "python"]
// const values = coding.forEach( (i) =>{
//     //console.log(i);
//     return i    //mtlab for each koi bhi value return nahi krta
// })
// console.log(values);

const book =[
    {
       title: 'BookOne',
       genre: 'history',
       publish: 1992 
    },
    {
        title: 'BookOne',
        genre: 'geo',
        publish: 1993 
     },
     {
        title: 'BookOne',
        genre: 'sst',
        publish: 1994 
     },
     {
        title: 'BookOne',
        genre: 'eco',
        publish: 1881 
     },
     {
        title: 'BookOne',
        genre: 'sci',
        publish: 1871 
     },
     {
        title: 'BookOne',
        genre: 'history',
        publish: 1981 
     },
     {
        title: 'BookOne',
        genre: 'math',
        publish: 1994
     },
]
const myNew = book.filter((bk)=>{
    return bk.title==='BookOne' && bk.publish<=1990
})
console.log(myNew);
