const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let pro = Promise.resolve()
arr.map((item, idx) => {
  let promiseArr = []
  pro = pro.then(() => {
    item.map(itm => {
      promiseArr.push(new Promise((resolve) => {
        setTimeout(() => {
          resolve(itm)
        }, Math.random() * 3000);
      }))
    })
    return Promise.all(promiseArr).then(res => {
      console.log(res);
    })
  })
})