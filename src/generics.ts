namespace generics {
  const log = console.log.bind(console);

  // 泛型
  // 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
  function createArray<T>(length: number, value: T): T[] {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }

  // 接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来
  log(createArray<string>(3, 'x'));

  // 多个类型参数
  function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
  }

  log(swap([7, 'seven']));

  // 泛型约束
  // 我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    log(arg.length);
    return arg;
  }

  // 多个类型参数之间也可以互相约束：
  // 下例中，我们使用了两个类型参数，其中要求 T 继承 U ，这样就保证了 U 上不会出现 T 中不存在的字段。
  function copyFields<T extends U, U>(target: T, source: U): T {
    for (let i in source) {
      target[i] = (<T>source)[i];
    }
    return target;
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };
  log(copyFields(x, { b: 10, d: 20 }));

  // 泛型接口
  // 可以使用含有泛型的接口来定义函数的形状：
  interface CreateArrayFunc {
    <T>(length: number, value: T): T[];
  }

  let createArray1: CreateArrayFunc;

  createArray1 = function <T>(length: number, value: T): T[] {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  };

  log(createArray1(10, []));

  // 进一步，我们可以把泛型参数提前到接口名上：
  // 此时在使用泛型接口的时候，需要定义泛型的类型。
  interface CreateArrayFunc2<T> {
    (length: number, value: T): T[];
  }

  let createArray2: CreateArrayFunc2<any>;

  createArray2 = function <T>(length: number, value: T): T[] {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  };

  log(createArray2(4, 555));

  // 泛型类
  // 与泛型接口类似，泛型也可以用于类的类型定义中：
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (x, y) => x + y;
  log(myGenericNumber.add(3, 4));
}
