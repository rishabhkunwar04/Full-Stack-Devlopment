let a={p:'raj',q:50,r:'green'}

let b=Object.create(a)
let c=Object.create(b)

console.log(a)
console.log(b)//it is empty
console.log(b.q)//here b is empty and it is inherited frm a so b.q here means a.q by inheritence rule
b.p='Arnav Gupta'
console.log(b)

//if not found in present object then search in that object from where present object is inherited
