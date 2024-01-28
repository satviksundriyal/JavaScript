const coding =["js", "java", "cpp", "ruby", "python"]

// coding.forEach( function(i){  //callback fn hai so name nahi hoga koi fn ka
// console.log(i);
// } )


//by arrow fn

// coding.forEach((i) => {
// console.log(i);
// })

function printMe(i){
    console.log(i);
}

//coding.forEach(printMe)  //GIVE REFERENCE TO FN REFERENCE MEANS WITHOUT()

// coding.forEach( (item, index, arr)=>{  //can take more values
//     console.log(item,index,arr);
// })

const myCoding= [  //array k andar object now isme operation
    {
        lang: "js",
        langFile: ".js"
    },
    {
        lang: "python",
        langFile: ".py"
    },    
    {
        lang: "java",
        langFile: ".java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lang);
})