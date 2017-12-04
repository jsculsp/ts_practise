namespace interfaces {
  // 对象的类型：接口（在 TypeScript 中，我们使用接口来定义对象的类型。）
  // 确定属性（赋值的时候，变量n的形状必须和接口的形状保持一致。）
  interface Person {
    name: string;
    age: number;
  }

  let tom: Person = {
    name: 'Tom',
    age: 25,
  };

  // 可选属性(可选属性的含义是该属性可以不存在。)
  interface Person2 {
    name: string;
    age?: number;
  }

  let linmu: Person2 = {
    name: 'linmu',
  };

  // 任意属性(一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性)
  interface Person3 {
    name: string;
    age?: number;

    [propName: string]: any;
  }

  let person3: Person3 = {
    name: 'person3',
    age: 44,
    arg1: 'arg1',
    arg2: [1, 2, 3],
  };

  // 使用 [propName: string] 定义了任意属性取 string 类型的值。
  interface Person4 {
    name: string;
    age?: string;

    [propName: string]: string;
  }

  let person4: Person4 = {
    name: 'person4',
    age: '44',
    arg1: 'arg1',
    arg2: 'arg2',
  };

  // 只读属性
  // 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
  interface Person5 {
    readonly id: number;
    name: string;
    age?: number;

    [propName: string]: any;
  }

  let person5: Person5 = {
    id: 5,
    name: 'person5',
    age: 13,
    arg1: 'arg1',
  };
}
