namespace enum_type {
  const log = console.log.bind(console);

  // 枚举
  // 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
  // 常数项
  enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

  log(Days.Sun === 0);
  log(Days.Mon === 1);
  log(Days.Tue === 2);
  log(Days.Sat === 6);

  log(Days[0] === 'Sun');
  log(Days[1] === 'Mon');
  log(Days[2] === 'Tue');
  log(Days[6] === 'Sat');

  // 手动赋值
  enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}

  log(Days2.Sun === 7);
  log(Days2.Mon === 1);
  log(Days2.Tue === 2);
  log(Days2.Sat === 6);

  // 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查 (不加<any>好像也可以)：
  enum Days3 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S'}

  // 计算所得项
  enum Color {Red, Green, Blue = 'blue'.length}

  // 常数枚举
  // 常数枚举是使用 const enum 定义的枚举类型
  // 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
  const enum Directions {Up, Down, Left, Right}

  let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
  // 上例的编译结果是：
  // var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}
