// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
/* function createArray<T>(length:number, value: T):Array<T> {
    let result:T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(3, 'x'))
console.log(createArray<number>(3, 2)) */

// 泛型参数的默认类型
/* function createArray<T=string>(length:number, value:T):Array<T> {
    let result:T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
} */

// 泛型接口

/* interface CreateArrayFun {
    <T>(length:number, value:T):Array<T>;
}
let createArray: CreateArrayFun;
createArray = function<T>(length:number, value:T):Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'x')); */

// 也可以把泛型参数提前到接口名上
/* interface CreateArrayFunc<T> {
    (length:number, value:T):Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'x'));

// 泛型类
class GenericNumber<T> {
    zeroValue:T;
    add:(x:T, y:T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10)); */

// 泛型约束
/* interface Lengthwise {
    length: number;
}
function loggingIndentity<T extends Lengthwise>(arg:T):T {
    console.log(arg.length);
    return arg;
}
loggingIndentity({length: 10, value: 3}) */

