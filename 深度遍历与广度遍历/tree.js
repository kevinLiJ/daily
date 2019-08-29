const data = {
  name: '1',
  children: [
    {
      name: '1-1',
      children: [
        { name: '1-1-1' },
        { name: '1-1-2' }
      ]
    },
    {
      name: '1-2',
      children: [
        { name: '1-2-1' },
        { name: '1-2-2' },
        { name: '1-2-3' }
      ]
    },
    {
      name: '1-3',
      children: [
        { name: '1-3-1' }
      ]
    },
  ],

}

// 深度优先--递归
function deep(pointer) {
  console.log(pointer.name);
  if (pointer.children && pointer.children.length > 0) {
    pointer.children.map(item => {
      deep(item)
    })
  }
}
// deep(data)
// 深度优先--非递归
function deep1(pointer) {
  let queue = [pointer]
  while (queue.length) {
    let currPointer = queue.pop()
    console.log(currPointer.name);
    if (currPointer.children && currPointer.children.length > 0) {
      queue.push(...currPointer.children)
    }
  }
}
// deep1(data)

// 广度优先--非递归
function deep2(pointer) {
  let queue = [pointer]
  while (queue.length) {
    let currPointer = queue.shift()
    console.log(currPointer.name);
    if (currPointer.children && currPointer.children.length > 0) {
      queue.push(...currPointer.children)
    }
  }
}
deep2(data)