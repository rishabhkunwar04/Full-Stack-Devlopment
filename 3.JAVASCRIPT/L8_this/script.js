
/*this:A property of an execution 
context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.*/
//In most cases, the value of this is determined by how a function is called (runtime binding)


// In web browsers, the window object is also the global object:
//console.log(this === window); // true


function checkThis() {
    console.log(this)//here this keyword  gives value as window which is the default object
  }
  
  let obj = {
    "a": 10,
    b: 'asdsa',
    c: true,
    d: function () {
      console.log(this) //here this keyword  gives value as  object 'obj'
    },
    10: 32246,               //key are alwys string it cant be integer here 10 is string it
                              //can be accesed by obj['10']
    true: 'asdasd',
    e: {
      l: 234,
      m: 'sdgsdg',
      n: function () {
        console.log(this)  //here this keyword give value as object e..
      },
    },


  }
  