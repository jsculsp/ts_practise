namespace type_inference {
  // 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型
  // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
  let myFavoriteNumber;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
}
