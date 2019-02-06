// 声明泛型方法有以下两种方式
function generics_func1<T>(arg:T): T {
  return arg;
}
// 或者
let generics_func2: <T>(arg: T) => T = function(arg){
  return arg;
}

//调用方式也有两种
generics_func1<string>('Hey, World~');
// 或者
generics_func2('hey, world');

function any_func(arg: any): any {
  return arg;
}

console.log(any_func(1));
console.log(any_func('hello world'));
console.log(any_func(['1', '2']))

// 方法1 带有any参数的方法
function any_fun(arg: any): any {
  console.log(arg.length);
  return arg;
}
// 打印了arg参数的length属性。因为any可以代替任意类型，所以该方法在传入参数不是数组或者带有length属性对象时，会抛出异常

// 方法2 Array泛型方法
function array_func<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}
// 参数类型是Array的泛型类型，肯定会有length属性，所以不会抛出异常

// 泛型类
class Generics_Demo<T>{
  value: T;
  show(): T{
    return this.value;
  }
}

let gene_demo1 = new Generics_Demo<number>();
gene_demo1.value = 1;
console.log(gene_demo1.show());   // 调用方法

gene_demo1.show = function() { return gene_demo1.value + 1; }  // 赋值新方法 返回值类型必须是number
console.log(gene_demo1.show());

// 泛型接口
interface Generics_interface {
  <T>(arg: T): T;
}

function func_demo<T>(arg: T): T{
  return arg;
}

let func2: Generics_interface = func_demo;
// 接口只有一个泛型方法成员。则用此接口类型定义的变量就是一个与成员类型一致的泛型方法

interface Generics_interface2<T> {
  (arg: T): T;
}

function func_demo2<T>(arg: T): T{
  return arg;
}

let func3: Generics_interface2<number> = func_demo2;
// 接口上声明泛型，声明变量时明确指定泛型的具体类型，则赋值的方法将自动带上具体的类型约束
console.log(func3(123))

// 泛型类型继承
interface LengthInterface {
  length: number;
}

function func_demo3<T extends LengthInterface>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 泛型类型继承自一个拥有length属性成员的接口，泛型类型将自动加上length属性的约束。调用时只有符合条件的对象才能正确赋值
console.log(func_demo3({ a: 1, length: 2 }));
console.log(func_demo3([1, 2]));