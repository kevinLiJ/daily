// setImmediate(() => {
//   console.log('setImmediate');

// })
// setTimeout(() => {
//   console.log('setTimeout');

// })

// process.nextTick(function a() {
//   console.log('process');
// })
let test = Promise.resolve().then(() => {
  return test
})