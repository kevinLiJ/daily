interface person {
  age: Array<number>;
  getName(): string;
}


let per: person = {
  age: 1,
  getName(): string {
    return 'name'
  }
}

class Person implements person {
  age: number
  constructor(age: number) {
    console.log('constructor');

    this.age = age
  }
  getName() {
    return '234'
  }
}


class li extends Person {
  constructor(age: number) {
    super(age)
  }
  abc() {
    console.log(2);
  }
}

let i = new li(12)

console.log(i.age);
