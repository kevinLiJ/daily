let a ={b:2}
let b = 2
let setB = () =>{
  b = 3
}
let setA = () =>{
  a.b = 3
}
module.exports = {
  a,
  setA,
  b,
  setB,
  getA(){
    return a
  },
  getB(){
    return b
  }
}
