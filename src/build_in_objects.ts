namespace build_in_objects {
  // ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等。
  // 我们可以在 TypeScript 中将变量定义为这些类型：
  let b: Boolean = Boolean(1);
  let e: Error = new Error('Error occurred');
  let d: Date = new Date();
  let r: RegExp = /[a-z]/;

  // TypeScript 核心库的定义文件
  // TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
  // 当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了
  interface Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    pow(x: number, y: number): number;
  }

  // 用 TypeScript 写 Node.js
  // Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
  // npm install @types/node --save-dev
}
