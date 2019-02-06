/* class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name; 
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch()); */
// console.log(howard.name); // 错误

/* class Person {
    protected _name: string;
    protected constructor(theName: string) {
        this._name = theName;
    }
}

class Employee extends Person {
    private _department:string;

    constructor(name:string, department:string) {
        super(name);
        this._department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this._name} and I work in ${this._department}`
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch()) */
// let john = new Person('John'); 'Person' 的构造函数是被保护的

// readonly修饰符

/* class Octopus {
    readonly name:string;
    readonly numberOfLegs:number = 8;
    constructor(theName:string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad.name); */

// 参数属性
/* class Octopus {
    readonly numberOfLegs:number = 8;
    constructor(readonly name: string) {
        this.name = name;
    }
}
let dad = new Octopus("Man with the 8 strong legs"); */
// dad.name = 9;

// 存取器

/* class Employee {
    fullName:string;
}

let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
} */

/* let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
} */

// 静态属性

/* class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

console.log(Grid.origin) */

// 抽象类

/* abstract class human {
    abstract makeSound():void;
    move():void {
        console.log('roaming the earch...');
    }
} */

/* abstract class Department {

    constructor(public name: string) {}

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting(); */
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 高级技巧
// 构造函数
class Greeter {
    static standardGreeting = "Hello, there";

    public greeting: string;
    
    greet() {
        if (this.greeting) {
            return "Hey," + this.greeting;
        } else {
            return Greeter.standardGreeting;
        } 
    }
}

let greeter1:Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// class Point {
//     x:number;
//     y:number;
// }

// interface Point3d extends Point {
//     z:number;
// }

// let point3d: Point3d = {x:1, y:2, z:3}
