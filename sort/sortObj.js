let arr = [
  {
    name: '小明',
    age: 13
  }, {
    name: '小红',
    age: 17
  }, {
    name: '小李',
    age: 15
  }, {
    name: '小李',
    age: 9
  }
]

arr.sort((a, b) => a.age - b.age)
console.log(arr);

// [ { name: '小李', age: 9 },
//   { name: '小明', age: 13 },
//   { name: '小李', age: 15 },
//   { name: '小红', age: 17 } ]
