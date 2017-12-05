namespace type_alias {
  // 类型别名
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;

}

let a = { asdf:'asdf' };
