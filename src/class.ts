namespace class_type {
  const log = console.log.bind(console);

  // public private 和 protected
  // TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
  // public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
  // private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
  // protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
  class Animal {
    public name = 'Animal!!!';

    public constructor() {
    }

    public static sayHi() {
      log('Hi');
    }
  }

  let a = new Animal();
  log(a.name);
  log(a.hasOwnProperty('name'));
  log(Object.getPrototypeOf(a).hasOwnProperty('sayHi'));

  class Animal2 {
    private name;

    public constructor(name) {
      this.name = name;
    }
  }

  // 抽象类
  // 首先，抽象类是不允许被实例化的
  abstract class Animal3 {
    public name;

    public constructor(name) {
      this.name = name;
    }

    public abstract sayHi();
  }

  // 其次，抽象类中的抽象方法必须被子类实现
  class Cat extends Animal3 {
    public eat() {
      log(`${this.name} is eating.`);
    }

    public sayHi() {
      log('Hi!');
    }
  }

  // 类的类型
  class Animal4 {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }

  let an: Animal4 = new Animal4('Jack');
  log(an.sayHi());
}
