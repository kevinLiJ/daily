class Vue{
  constructor({data,render}){
    this._data = data
    proxy.call(this,this._data,render)
  }
}



function proxy(obj,cb){
  const that = this
  let keys = Object.keys(obj)

  keys.forEach(key =>{
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      set: val => {
        console.log(val);
        
        // 依赖收集
        that._data[key] = val
        cb()
      },
      get: () => {
        // 依赖收集
        return that._data[key]
      }
    })
  })
}

class Dep{
  constructor(){
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }

  notify(){
    this.subs.forEach(sub =>{
      sub.update()
    })
  }
}

class Watcher{
  constructor(){
    
  }
  update(){
    console.log(update);
    
  }
}


let vm  = new Vue({
  data: {
    text1:'1',
    text2:'2',
    text3:'3',
  },
  render(){
    console.log('render');
    
  }
})
vm.text1 = 2