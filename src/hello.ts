const log = console.log.bind(console)

// hello function
function sayHello(person: string) {
  return 'Hello, ' + person
}

let user = 'Tom'
log(sayHello(user))

// boolean test
let isDone: boolean = true

log(isDone)

// number test
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

log(decLiteral)
log(hexLiteral)
log(binaryLiteral)
log(octalLiteral)
log(notANumber)
log(infinityNumber)

// string test
let myName: string = 'Tom'
let myAge: number = 25
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`

log(myName)
log(myAge)
log(sentence)

// void test 
// JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
