function Person(name,age)
{
    this.name=name
    this.age=age
    return 20
}

let p= Person('kartik',70)
let q= new Person('kartik',100)

console.log(p)//it will return 20
console.log(q)//it return obj (Person { name: 'kartik', age: 100 }
)