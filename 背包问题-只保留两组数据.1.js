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



const getMaxValue = function (s, v, c) {
  // Write your code here
  preResult = new Array(s + 1).fill(0)
  currResult = new Array(s + 1).fill(0)
  for (let i = 0; i <= s; i++) {
    if (i >= c[0]) {
      preResult[i] = v[0]
    }else{
      preResult[i] = 0
    }
  }
  for (let i = 1; i < c.length; i++) {
    for (let j = 0; j <= s; j++) {
      // // 不取物品i时的最大价值 = f(s, n - 1) = preResult[j]
      let top = 0
      // // 取物品i时的最大价值 = v[i] + f(s - c[i], n - 1) = v[i] + preResult[j - c[i]]
      let left = 0
      top = preResult[j]
      if (j >= c[i]) {

        left = v[i] + preResult[j - c[i]]
      }
      currResult[j] = Math.max(top, left)
    }
    preResult = [...currResult]
  }
  return currResult[s]
}

console.log(getMaxValue(s,v,c))