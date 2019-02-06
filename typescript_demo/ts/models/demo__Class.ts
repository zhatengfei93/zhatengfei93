class User {
  public name: string; // 默认是public
  private sex: string; // 私有属性
  protected age: number; // 受保护属性 和private相似 但是在派生类可以访问
  constructor(_name: string) {
    this.name = _name;
  }
  sayHello(): string {
    return `Hello, ${ this.name }!`;
  }
}

let user = new User('John Reese');
user.name = 'Root'; // 公有属性, 可以赋值
// user.sex = 'female'; // 私有属性 无法赋值
// user.age = 28; // 受保护属性 无法赋值
console.log(user.sayHello());



// 属性的get和set访问器
class Person {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  constructor(_name: string) {
    this.name = _name;
  }

  sayHello(): string {
    return `Hello, ${ this._name }`;
  }
}

let personal = new Person('John Reese');
personal.name = 'Root';
console.log(personal.sayHello());

// 静态属性即是通过类型而不是实例就可以访问的属性
class User1{
  static sex_type = ['male', 'female'];  // 静态属性
  name: string;
  sex: string;

  constructor(_name: string) {
    this.name = _name;
  }

  sayHello(): string {
    return `Hello, ${ this.name }`;
  }
}

let user1 = new User1('John Reese');
user1.name = 'Root';
user1.sex = User1.sex_type[1];
user1.sayHello();

// 类的继承

// 基类
class Animal{
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  eat() {
    console.log(`${ this.name } 吃食物。`);
  }
}

// 派生类
class Dog extends Animal {
  constructor(theName: string) {
    super(theName);
  }

  eat() {
    super.eat();
    console.log('并且吃的是狗粮~')
  }
}

class Personal extends Animal {
  constructor(theName: string) {
    super(theName);
  }

  // 重写基类的方法
  eat() {
    console.log(`${ this.name } 拒绝吃狗粮～`);
  }
}

let animal = new Animal('动物');
animal.eat()

let dog: Animal;
dog = new Dog('狗狗');
dog.eat();

let people: Animal;
people = new Personal('人类');
people.eat();

// 抽象类
abstract class Abs_animal {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  abstract eat();
}

class Dogs extends Abs_animal {
  constructor(theName: string) {
    super(theName);
  }

  eat() {
    console.log(`${ this.name } 吃狗粮～`);
  }
}

// let absanimal = new Abs_animal('动物');  // 抽象类无法实例化
// absanimal.eat()

let dogs: Abs_animal;
dogs = new Dogs('母狗');
dogs.eat();

console.log('-------接口-------')

// 接口类型可以作为方法的参数类型，效果等同于直接指定Json对象的类型
// 同样，接口成员也可以是缺省的
// 但是在某些情况下，调用方法时，参数赋值可能会有多个，接口在作为参数类型时也支持拥有多个成员的情况
interface In_Animal {
  name: string;
  age?: number;
  [propName: string]: any;
}

let printName = function(param: In_Animal) {
  if (param.age) {
    console.log(`Name is ${ param.name }, and age is ${ param.age }`);
  } else {
    console.log(`Name is ${ param.name }`);
  }
}

printName({ name: 'Dog' });
printName({ name: '母狗', age: 22 });
printName({ name: '母狗', age: 23, charactor: 'Eager'})

// 接口也可以定义方法的类型，和数组类型
interface FuncType {
  (x: string, y: string): string; // 声明方法成员
}

let func1: FuncType;
func1 = function (prop1: string, prop2: string): string {  // 方法参数名称不需要与接口成员的参数名称保持一致
  return prop1 + ' ' + prop2;
}

interface ArrayType {
  [index: number]: string;
}

let arr: ArrayType;
arr = ['Dog', 'Cat'];

// 接口的继承与实现
// 接口也可以多重继承
interface Animal2 {
  name: string;
  eat(): void;
}

interface People extends Animal2 {
  use(): void;
}

class Cat implements Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  eat() {
    console.log(`${this.name } 吃猫粮~`)
  }
}

class Pig implements Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  eat() {
    console.log(`${this.name } 吃猪食~`)
  }
}

class Peoples implements People {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  eat() {
    console.log(`${ this.name } 拒绝吃狗粮~`)
  }
  use() {
    console.log(`${ this.name } 会使用火～`)
  }
}

let pig: Animal2;
pig = new Pig('猪猪');
pig.eat();

let cat: Animal2;
cat = new Cat('喵星人');
cat.eat();

let man: Peoples;
man = new Peoples('男人');
man.eat();
man.use();

// 在TypeScript里，接口可以对符合任一成员类型的对象进行转换，转换之后的对象自动继承了接口的其他成员
interface Animal3 {
  name: string;
  age: number;
  eat(): void;
}
// 上面的例子里，声明了拥有name属性的json对象，通过<>将json对象转换成了Animal类型的对象。转换后的对象则拥有了另外的age属性和eat方法

let thing = { name: '桌子' };
let otherThing = <Animal3>thing; // 类型转换
otherThing.age = 5;
otherThing.eat = function() {
  console.log(`${ this.name } 不知道吃什么~`);
}
otherThing.eat()

// 接口可以继承类，这样接口就具有了类里的所有成员，同时这个接口只能引用这个类或者它的子类的实例
class People__extend {
  name: string;

  private age: number;

  constructor(theName: string) {
    this.name = theName;
  }
  
  eat() {
    console.log(`${ this.name } 拒绝吃狗粮!`);
  }

  use() {
    console.log(`${ this.name } 会使用工具!`);
  }

}

interface Animal4 extends People__extend {

}

class Man extends People__extend {

}

class Snake {
  name: string;

  private age: number;

  constructor(theName: string) {
    this.name = theName;
  }

  eat() {
    // do something
  }

  use() {
    // do something
  }

}

let snake: Animal4;
// snake = new Snake('蛇')；

let gentleman: Animal4;
gentleman = new Man('男人');
gentleman.eat();