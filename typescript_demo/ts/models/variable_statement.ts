// 解构数组
let input = [1, 2];
// let [first, second] = input;
// console.log(first, second);

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
// f(input);

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let {a, b} = o;

// 属性重命名

/* let { a: newName1, b: newName2 } = o;
console.log(newName1, newName2); */

let {a, b}: {a: string, b:number} = o;
// console.log(a, b)

// 默认值
function keepWholeObject(wholeObject: {a: string, b?:number}) {
    let { a, b = 1001 } = wholeObject;
}

// function func({a, b = 0} = {a: ""}):void {
//     console.log(a, b);
// }
// func({a: "yes"});

