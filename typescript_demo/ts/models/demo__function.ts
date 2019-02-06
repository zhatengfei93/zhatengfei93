function func(x: number, y: number): number {
  return x + y;
}

let func_lambda: (x: number, y: number) => number = function(x, y) { return x + y };

// let result1 = func(1, 2);
// console.log(result1);

// 缺省参数声明
let showName = function (firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let wholeName1 = showName('星辰', 'Leo');
console.log(wholeName1)
let wholeName2 = showName('星辰');
console.log(wholeName2)

// 默认值参数定义
let showName2 = function(firstName: string, lastName = 'Leo'): string {
  return firstName + ' ' + lastName;
};

let wholeName3 = showName2('星辰');
console.log(wholeName3);

// 多参数定义
let restParamsFunc = function(param1: string, ...restParams: string[]): string {
  return param1 + ' ' + restParams.join(' ');
}

let restParamsFuncResult = restParamsFunc('a', 'b', 'c');
console.log(restParamsFuncResult)

// 对象类型参数
let jsonParamFunc = function(x: {p1: string}): string {
  return x.p1
}

let jsonParamFunResult1 = jsonParamFunc({p1: 'a'})
let params = {p1: 'a', p2: 'b'};
let jsonParamFunResult2 = jsonParamFunc(params)
console.log(jsonParamFunResult1)
console.log(jsonParamFunResult2)

//方法类型参数
let funcParamFunc = function(func:(x: string, y: string) => string): string {
  let _x = 'a';
  let _y = 'b';
  return func(_x, _y);
};

let funcParamFunResult = funcParamFunc(function (x, y) { return x + y });
console.log(funcParamFunResult);

// 方法重载
function overloadFunc(x: { p1: string }): string;
function overloadFunc(x: number): number;
function overloadFunc(x): any {
  if (typeof x == 'object') {
    return x.p1;
  }
  if (typeof x == 'number') {
    return x;
  }
}
let overloadFuncResult1 = overloadFunc({p1: 'a'});
let overloadFuncResult2 = overloadFunc(1);
console.log(overloadFuncResult1);
console.log(overloadFuncResult2);