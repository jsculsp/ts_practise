namespace array_type {
  // 「类型 + 方括号」表示法
  let fibonacci: number[] = [1, 1, 2, 3, 5];

  // 用接口表示数组
  // NumberArray 表示：只要 index 的类型是 number，那么值的类型必须是 number。
  interface NumberArray {
    [index: number]: number;
  }

  let fibonacci1: NumberArray = [1, 1, 2, 3, 5];

  // 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
  let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

  // 类数组（Array-like Object）不是数组类型，比如 arguments：
  // 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
  function sum() {
    let args: IArguments = arguments
  }
}
