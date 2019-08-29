class diaodu{
  addTask(){

  }
}

const settimeout = (time) => () => new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve(1)
  }, time);
}).then(() =>{
  console.log(time);
})

const dd = new diaodu()
dd.addTask(settimeout(1000))
dd.addTask(settimeout(500))
dd.addTask(settimeout(300))

console.log(settimeout(1000));

