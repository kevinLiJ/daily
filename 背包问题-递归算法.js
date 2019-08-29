/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const v = [400, 500, 200, 300, 350]
const c = [5, 5, 3, 4, 3]
const s = 10

// const v = [3000, 2000, 1500]
// const c = [4, 3, 1]
// const s = 4



const getMaxValue = function (s,n, v, c) {
  if(s === 0){
    return 0
  }
  if(n === 0){
    return 0
  }
  // Write your code here
  let arr = new Array(c.length)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(s).fill(0)
  }
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === 0) {

        if (c[i] <= j + 1) {
          arr[i][j] = v[i]
        }
        continue
      }
      // 不取物品i时的最大价值 = f(s, n - 1) = arr[i - 1][j]
      let top = 0
      // 取物品i时的最大价值 = v[i] + f(s - c[i], n - 1) = v[i] + arr[i - 1][j - c[i]]
      let left = 0
      if ([j + 1 - c[i]] >= 0) {
        left += v[i]
      }
      if (i - 1 >= 0) {
        top = arr[i - 1][j]
        if ([j + 1 - c[i]] > 0) {

          left += arr[i - 1][j - c[i]]
        }
      }
      arr[i][j] = Math.max(top, left)
    }

  }
  // 不取物品i时的最大价值 = f(s, n - 1) = arr[i - 1][j]
  
  // 取物品i时的最大价值 = v[i] + f(s - c[i], n - 1) = v[i] + arr[i - 1][j - c[i]]
  // return Math.max(getMaxValue(s, n - 1, v.slice(1)), c.slice(1) , s - c[0])
  return arr[arr.length - 1][arr[0].length - 1]
  
}

console.log(getMaxValue(s, v, c))