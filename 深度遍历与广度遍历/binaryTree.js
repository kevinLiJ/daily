const tree = {
  name: '1',

  left: {
    name: '1-1',
    left: {
      name: '1-1-1',
      left: { name: '1-1-1-1' },
      right: { name: '1-1-1-2' }
    },
    right: {
      name: '1-1-2',
      left: { name: '1-1-2-1' },
      right: { name: '1-1-2-2' }
    },
  },
  right: {
    name: '1-2',
    left: {
      name: '1-2-1',
      left: { name: '1-2-1-1' },
      right: { name: '1-2-1-2' }
    },
    right: {
      name: '1-2-2',
      left: { name: '1-2-2-1' },
      right: { name: '1-2-2-2' }
    },
  }
}

const deep = {

  p: Promise.resolve(),
  // 前序--递归
  deep1(pointer) {
    console.log(pointer.name);
    if (pointer.left) {
      deep1(pointer.left)
    }
    if (pointer.right) {
      deep1(pointer.right)
    }
  },

  // 中序--递归
  deep2(pointer) {
    if (pointer.left) {
      deep2(pointer.left)
    }
    console.log(pointer.name);
    if (pointer.right) {
      deep2(pointer.right)
    }
  },

  // 后序--递归
  deep3(pointer) {
    if (pointer.left) {
      deep3(pointer.left)
    }
    if (pointer.right) {
      deep3(pointer.right)
    }
    console.log(pointer.name);
  },

  // 后序--递归--异步
  async  deep4(pointer) {
    if (pointer.left) {
      deep4(pointer.left)
    }
    if (pointer.right) {
      deep4(pointer.right)
    }
    this.p = this.p.then(() => {
      return new Promise(res => {
        setTimeout(() => {
          console.log(pointer.name);
          res()
        }, Math.random() * 2000);
      })
    })
  },

  // 前序--非递归
  deep4(pointer) {
    let queue = [pointer]
    while (queue.length) {
      let currPointer = queue.pop()
      console.log(currPointer.name);
      if (currPointer.right) {
        queue.push(currPointer.right)
        
      }
      if (currPointer.left) {
        queue.push(currPointer.left)
      }
    }

  },
    // 中序--非递归
    deep5(pointer) {
      let queue = []
      let node = pointer
      while (node || queue.length) {
        // 如果node有左节点，则一直添加进队列
        while(node){
          queue.push(node)
          node = node.left
        }
        // 说明已经走到底了，弹出底部的左节点
        node = queue.pop()
        // 处理当前节点
        console.log(node.name);
        // 处理它的右节点
        node = node.right
      }
    },
        // 后序--非递归
        deep6(pointer) {
          let queue = []
          let node = pointer
          while (node || queue.length) {
            // 如果node有左节点，则一直添加进队列
            while(node){
              queue.push(node)
              node = node.left
            }
            // 说明已经走到底了，弹出底部的左节点
            node = queue.pop()
            // 处理当前节点
            console.log(node.name);
            // 处理它的右节点
            node = node.right
          }
        }
}
deep.deep6(tree)