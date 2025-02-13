
//parenthesis enclose/encapsulate expressions
// || is or - will pass if either is true
console.log((1 > 2) || (2 < 3))

//we can chain them together to make more complex expressions
console.log((true || false) && (true && true) || (true))

const yo = "pincone"
//switch
switch(yo) {
    case 'cat1':
        // code block
        break;
    case 'pinecone':
        console.log('found')
        break;
    default:
        console.log('default')
    // code block
}

//loops
const cats = ['Pine', 'Cone', 'Pinecone'];

//forEach, takes a callback function and passes the current element to it
cats.forEach(function(currentElement) {
    console.log(currentElement)
});

//for of
for (const cat of cats) {
    console.log(cat);
}

//map - creates a new array from calling a function for every array element.
const cats2 = cats.map(function (cat){
    return 'new ' + cat
})
console.log(cats2)

//can also use arrow function syntax
const cats3 = cats.map(cat => 'new' + cat)
console.log(cats3)

//filter - creates a new array filled with elements that pass a test provided by a function
const cats4 = cats.filter(function (cat){
    if (cat === 'Pinecone') {
        return true;
    }
})
console.log(cats4)

const cats5 = cats.filter(cat => cat === 'Pinecone')
console.log(cats5)