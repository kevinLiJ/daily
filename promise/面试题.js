const a = () => {
  Promise.resolve().then(() => {
      console.log('1');
  })
  console.log(2);

}
const b = () => {
  Promise.resolve().then(() => {
      console.log('3');
  })
  console.log(4);

}

// ============
// a()
// b()
// 2 4 1 3
// ============


// ============
// document.body.addEventListener('click', a)
// document.body.addEventListener('click', b)
// 点击body
// 2 1 4 3
// ============


// ============
// setTimeout(() => {
//     a()
// }, 0);
// setTimeout(() => {
//     b()
// }, 0);
// 2 1 4 3
// ============


// ============
document.body.addEventListener('click', a)
document.body.addEventListener('click', b)
document.body.click()
// 2 4 1 3
// ============