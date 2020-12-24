  
class Person {
    constructor(name, age) {  //when class created it create a prototype along with it which inherit from object.prototype
      this.name = name
      this.age = age
    }
  
    isAdult() {
      return this.age >= 18
    }
  }
  
  let p1 = new Person('John Doe', 22)
  let p2 = new Person('Jane Doe', 15)
  
  console.log(typeof Person) // function; there is NO new datatype called 'class'
  console.log(p1.__proto__ == Person.prototype) // true
  console.log(p1.__proto__.__proto__ == Object.prototype) // true
 
  /////////

  class Student extends Person { //in this meathod,the object of this class can even acces or call upon Person class
    constructor(name, age, grade) {
      super(name, age) 
      this.grade = grade
    }
  }
  
  let s1 = new Student('Harry Potter', 13, 5)
  let s2 = new Student('Hermoine Granger', 14, 6)

  console.log(s1.isAdult())//false; we can use function of Person of this class in this meathod
  
  console.log(s1.__proto__ == Student.prototype)
  console.log(s1.__proto__.__proto__ == Person.prototype)
  console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)
  
  // inheritance chain 
  // Object.prototype -> Person.prototype -> Student.prototype
  
  // no inheritance between the classes (actually they are functions)
  // Object -x-> Person -x-> Student