let obj = {
  a: {
    b: 1
  },
  c: 2
}

let obj1 = new Proxy(obj, {
  set(target, key, value, receiver) {
    console.log('======');
    Reflect.set(target, key, value, receiver)
  }
})

// obj1.a = 3
// obj1.a.b = 3

let arr = [1, 5, 8, 3, 4]

let arr1 = new Proxy(arr, {
  set(target, key, value, receiver) {
    console.log(target);
    console.log('======');
    console.log(key);
    console.log(value);
    
    return Reflect.set(target, key, value, receiver)
  }
})
console.log(arr1.sort());
