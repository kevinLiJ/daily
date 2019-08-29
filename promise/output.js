


const promise1 = () => new Promise(resolve => {
  for (i = 0; i < 2; i++) {
    console.log('111');
  }
  resolve(true)
})

const promise2 = () => new Promise(resolve => {
  for (i = 0; i < 2; i++) {
    console.log('111');
  }
  resolve(true)
})

setTimeout(() => {
  console.log(222);
}, 0)

Promise.all([promise1(), promise2()]).then(() => {
  console.log('all done');

})