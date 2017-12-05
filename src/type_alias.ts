namespace type_alias {
  // 类型别名与字符串字面量类型都是使用 type 进行定义。

  // 类型别名
  // 类型别名常用于联合类型。
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
      return n;
    }
    return n();
  }

  // 字符串字面量类型
  // 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
  type EventNames = 'click' | 'scroll' | 'mousemove';
  function handleEvent(ele: Element, event: EventNames): void {
    // do something
  }

  handleEvent(document.querySelector('#id'), 'scroll');
}
