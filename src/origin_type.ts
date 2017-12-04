namespace origin_type {
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
  function alertName(): void {
    log('My name is Tom')
  }

  alertName()

  // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
  let unusable: void = undefined
  log(unusable)

  // Null 和 Undefined
  let u: undefined = undefined
  let n: null = null
  log(u)
  log(n)

  // undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
  // 与 void 的区别是，undefined 和 null 是所有类型的子类型。
  // 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
  // 以下不会报错
  let uu: undefined = undefined
  let num: number = uu
  log(num)
}
