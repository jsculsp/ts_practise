namespace union_types {
  const log = console.log.bind(console)

  let myFavoriteNumber: number | string
  myFavoriteNumber = 'seven'
  log(myFavoriteNumber)
  myFavoriteNumber = 7
  log(myFavoriteNumber)

  // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
  // 我们只能访问此联合类型的所有类型里共有的属性或方法：
  function getString(something: string | number) {
    return something.toString()
  }

  log(getString('hello'))
  log(getString(777))
}
