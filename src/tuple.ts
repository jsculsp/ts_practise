namespace tuple {
  // 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
  // 定义一对值分别为 string 和 number 的元组：
  let xcatliu: [string, number] = ['Xcat Liu', 25];

  let tuple2: [string, number];
  tuple2[0] = 'tuple2';
  tuple2[1] = 2;

  // 越界的元素
  // 当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型：
  // 当访问一个越界的元素，也会识别为元组中每个类型的联合类型：
  let tuple3: [string, number];
  tuple3 = ['tuple3', 3, 'yuejie', 3];
  let len = (<string>tuple3[2]).length;
}
