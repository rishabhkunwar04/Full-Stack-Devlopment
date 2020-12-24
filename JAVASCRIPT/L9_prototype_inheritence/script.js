let obj1 = {
    a: 10,
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'dfn'

let obj3 = Object.create(obj2)
/*if we assign,obj2.a="rst"
 then ,obj3.a="rest",it will shadow the value 10
*/

// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1

/* 
//this below logic follow only at write time not at read time ..at write time it didn't get written in prototype
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/
