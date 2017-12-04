namespace function_type {
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

  mySum(3, 4)
}
