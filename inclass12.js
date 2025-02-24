console.log(1 + '4')

console.log(Number(true))
console.log(Number(false))

let a = "hello";
console.log(typeof a);

a = 5
console.log(typeof a)

console.log(1 + 'a'); // => '17'

const output = 1 + 'a'
console.log(typeof output)

const name = 'Kira';

//block
if (name) {
    console.log(name)
}

if (true) {
    var blockVar = 'True'
    const blockConst = 'test2'
    let blockLet = 'test3'
}

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  // // //
  const number = numberGenerator();
  number();
