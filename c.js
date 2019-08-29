const arr = [1, 2, 3]
const g = arr[Symbol.iterator]()

let a = g.next()

// console.log(g);


let obj = {
    fun1: () => {
        console.log(111);
    },
    fun2: () => {
        this.fun1()
    },
}

// obj.fun2()

setTimeout(() => {
    console.log(4);

}, 0)

new Promise(resolve => {
    console.log(1);
    for (let i = 0; i < 9; i++) {
        i == 8 && resolve()
    }
    console.log(2);

}).then(() => {
    console.log(5);
})
console.log(3);
