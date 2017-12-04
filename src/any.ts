namespace any {
  const log = console.log.bind(console)

  // 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
  let myFavoriteNumber: any = 'seven'
  myFavoriteNumber = 7

  // 未声明类型的变量
  // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
  let something
  something = 'seven'
  something = 7
  log(something)
}
