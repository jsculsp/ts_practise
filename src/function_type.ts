namespace function_type {
  const log = console.log.bind(console)

  // 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，
  // 其中函数声明的类型定义较简单：
  function sum(x: number, y: number): number {
    return x + y;
  }

  sum(1, 2);

  // 函数表达式的类型定义：
  let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  };

  mySum(3, 4);

  // 用接口定义函数的形状
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
  };

  // 可选参数(可选参数后面不允许再出现必须参数了)
  function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
      return `${firstName} ${lastName}`
    }
    return firstName;
  }

  log(buildName('lin', 'mu'))
  log(buildName('linmu'))

  // 参数默认值(TypeScript 会将添加了默认值的参数识别为可选参数,
  // 此时就不受「可选参数必须接在必需参数后面」的限制了)
  function buildName2(firstName: string = 'lin', lastName: string): string {
    return `${firstName} ${lastName}`
  }

  log(buildName2(undefined, 'mu'))

  // 剩余参数
  // 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
  function push(array: any[], ...items: any[]): void {
    items.forEach((item) => {
      array.push(item)
    })
    log(array)
  }

  // 有类型推论，可以不显示指定类型
  let a = []
  push(a, 1, 2, 3)

  // 重载
  // 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
  // 我们可以使用重载定义多个 reverse 的函数类型：
  // function reverse(x: number): number
  // function reverse(x: string): string
  function reverse(x: number | string): number | string {
    let retVal
    if (typeof x === 'number') {
      retVal = Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
      retVal = x.split('').reverse().join('')
    }
    return retVal
  }

  log(reverse('123'))

  // 好玩的发现：声明变量类型为 any 可以跳过编译器的类型检查
  function test(): number {
    let a: any
    a = 's'
    return a
  }

  function test2(n: number) {

  }

  let aaa: any
  aaa = 's'
  test2(aaa)

  
}
