// 布尔值
let isDone: boolean = false;
isDone = true;

// 数字
let num: number = 1;
num = 2.5;
num = 0xf00d;

// 字符串
let str: string = 'Hey, world';
let content: string = `${ str } too`;

// 数组
let numbers1: number[] = [1, 2];
let numbers2: Array<number> = [1, 2, 3];

// 元组 Tuple
let t: [string, number] = ['No.', 1];
t = ['This is No.', 2];
// 当访问一个越界的元素，会使用联合类型替代
// t[3] = 'world';

// 枚举
enum Operator1 { Add, Update, Delete, Select };
let opt1: Operator1 = Operator1.Add;

enum Operator2 { Add=1, Update, Delete, Select };
let opt2: Operator2 = Operator2.Update;
let opt2Name: string = Operator2[2];

/* enum Color {Red, Green, Blue};
let c: Color = Color.Green; */

/* enum Color {Red = 1, Green = 3, Blue = 4};
let c: Color = Color.Green; */

enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];

// Any
let obj: any = 'This is a string';
obj = 1;
obj = [1, 2];
obj = false;
obj = {};
obj = function() { return false; }

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;

// Void 没有任何返回值
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;

// Null 和 Undefined
let u:undefined = undefined;
let n:null = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量

// Never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// Object 表示非原始类型

// 类型断言

/* let someValue:any = "this is a string";
let strLength:number = (<string>someValue).length;
console.log("someValue的值" + someValue, "\nstrLength的值" + strLength); */

let someValue:any = "this is a string";
let strLength:number = (someValue as string).length;


// console.log(content)
// console.log(numbers1)
// console.log(numbers2)
// console.log(t[0].substr(1));
// console.log(t[3].toString());
// console.log(opt1)
// console.log(opt2)
// console.log(colorName);
// console.log(notSure);
// console.log(list);
// console.log(opt2Name)
