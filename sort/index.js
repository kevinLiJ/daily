
// 冒泡排序
Array.prototype.bubbleSort = function () {
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] > 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// 模拟sort
Array.prototype.sort1 = function (fn = (a, b) => a.toString().codePointAt() - b.toString().codePointAt()) {
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (fn(arr[i], arr[j]) > 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

const fn = (a, b) => {
  return a - b
}

let arr = [1, 52, 8, 113, 4, 7]

console.log(arr.bubbleSort());  // [ 1, 4, 7, 8, 52, 113 ]
console.log(arr.sort1(fn));   // [ 1, 4, 7, 8, 52, 113 ]
console.log(arr.sort1());  // [ 1, 113, 4, 52, 7, 8 ]
console.log(arr.sort(fn));   // [ 1, 4, 7, 8, 52, 113 ]
console.log(arr.sort());  // [ 1, 113, 4, 52, 7, 8 ]