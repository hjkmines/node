console.log(__dirname, __filename)

class Person {
  constructor(name, age) {
    this.name = name, 
    this.age = age
  }

  sayHello() {
    console.log("Hello")
  }
}

module.exports = Person; 