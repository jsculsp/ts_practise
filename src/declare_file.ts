namespace declare_file {
  // 声明语句
  // 我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：
  // declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
  declare const jQuery: (string) => any
  jQuery('#foo')

  // 声明文件
  // 通常我们会把类型声明放到一个单独的文件中，这就是声明文件
  // 我们约定声明文件以 .d.ts 为后缀。
  // jQuery.d.ts
    // declare var jQuery: (string) => any;
  // 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
    // /// <reference path="./jQuery.d.ts">
    // jQuery('#foo')
  // TypeScript 2.0 推荐使用 @types 来管理。
  // @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
    // npm install @types/jquery --save-dev
}
