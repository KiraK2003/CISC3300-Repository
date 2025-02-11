console.log(1 + '4')

console.log(Number(true))
console.log(Number(false))

//This file will be run step by step

// dynamic typing

// variable a is assigned to a string
let a = "hello";
console.log(typeof a);

// variable a is assigned to an integer
a = 5
console.log(typeof a)

// weak typing
// tries to convert types, this is common in interpreted languages, typing is less strict
console.log(1 + 'a'); // => '17'

const output = 1 + 'a'
console.log(typeof output)

//type juggling

// if ("") {
//     console.log("is true")
// } else {
//     console.log("is false")
// }

// statement
const name = 'Kira';

//block
if (name) {
    console.log(name)
}

//variables and scope
if (true) {
    var blockVar = 'True'
    const blockConst = 'test2'
    let blockLet = 'test3'
}
console.log(blockVar)
console.log(blockConst)
console.log(blockLet)