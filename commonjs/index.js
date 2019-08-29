let a = require('./a').a
let setA = require('./a').setA
let b = require('./a').b
let setB = require('./a').setB
let getA = require('./a').getA
let getB = require('./a').getB


console.log('a', a);  // { b: 2 }
console.log('b', b);  // 2
console.log('getA', getA());  // { b: 2 }
console.log('getB', getB()); // 2
console.log('===========================');

setA()
setB()
console.log('a', a);   //  { b: 3 }
console.log('b', b);    // 2
console.log('getA', getA());  // { b: 3 }
console.log('getB', getB());  // 3
console.log('===========================');

a.b = 4
b = 4
console.log('a', a);  // { b: 4 }
console.log('b', b);  // 4
console.log('getA', getA());  // { b: 4 }
console.log('getB', getB());  // 3


// 模块缓存问题