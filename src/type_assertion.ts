namespace type_assertion {
  // 类型断言（Type Assertion）可以用来手动指定一个值的类型。
  // 语法：<类型>值 或 值 as 类型
  // 记得加小括号！！！

  // 例子：将一个联合类型的变量指定为一个更加具体的类型
  // 有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
  // 此时可以使用类型断言，将 something 断言成 string：
  function getLength(something: string | number): number {
    if ((<string>something).length) {
      return (<string>something).length;
    }
    return something.toString().length;
  }
}
