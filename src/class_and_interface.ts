namespace class_and_interface {
  const log = console.log.bind(console);

  // 接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述，
  // 也可以对类的一部分行为进行抽象
  // 类实现接口

  // 实现（implements）是面向对象中的一个重要概念。
  // 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
  // 这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

  interface Alarm {
    alert();
  }

  class Door {

  }

  class SecurityDoor extends Door implements Alarm {
    alert() {
      log('SecurityDoor alert');
    }
  }

  class Car implements Alarm {
    alert() {
      log('Car alert');
    }
  }

  // 一个类可以实现多个接口：
  interface Alarm2 {
    alert();
  }

  interface Light {
    lightOn();

    lightOff();
  }

  class Car1 implements Alarm2, Light {
    alert() {
      log('Car alert');
    }

    lightOn() {
      log('Car light on');
    }

    lightOff() {
      log('Car light off');
    }
  }

  // 接口继承接口
  interface LightableAlarm extends Alarm {
    lightOn();

    lightOff();
  }

  // 接口继承类
  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = { x: 1, y: 2, z: 3 };

  // 混合类型
  // 之前学习过，可以使用接口的方式来定义一个函数需要符合的形状
  // 有时候，一个函数还可以有自己的属性和方法：
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) {};
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
}
