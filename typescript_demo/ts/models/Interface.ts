/* function printLabel(labelledObj:{label:string}) {
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj); */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
    // 字符串索引签名
    [propName:string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({width: 200});
console.log(mySquare.area)

// 额外的属性检查
mySquare = createSquare({width: 100, opacity: 0.3} as SquareConfig);

let squareOptions = { colour: "red", width: 100 };
mySquare = createSquare(squareOptions);


// 只读属性
interface Point {
    readonly x:number;
    readonly y:number;
}
let p1:Point = {x: 10, y: 20};
// p1.x = 20; error!

let a1:number[] = [1, 2, 3, 4];
let ro:ReadonlyArray<number> = a1;

// 函数类型
interface SearchFunc {
    (source:string, subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source: string, subString: string):boolean {
    let result = source.search(subString);
    return result > -1;
}
console.log(mySearch('this', 'is'));

// 可索引的类型
interface StringArray {
    [index: number]: string;
}
let myArray:StringArray;
myArray = ["Bob", "Fred"];

let myStr:string = myArray[0];
console.log(myStr);

// 类类型
// 实现接口
/* interface ClockInterface {
    currentTime: Date;
    setTime(d:Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d:Date) {
        this.currentTime = d;
    }
    constructor(h:number,m:number) {}
} */

interface ClockInterface {
    tick();
}
interface ClockConstructor {
    new (hour:number, minute:number):ClockInterface;
}
function createClock(ctor:ClockConstructor, hour:number, minute:number):ClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
    constructor(h:number, m:number) {}
    tick() {
        console.log('beep beep');
    }
}
class AnalogClock implements ClockInterface {
    constructor(h:number, m:number) {}
    tick() {
        console.log('tick tock')
    }
}
let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();

// 继承接口
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
// 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
