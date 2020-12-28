function outer(arg1) {
    let var1 = 10
    let x = 10
    
    function inner(arg2) {
      let var2 = 20
      let x = 20
      console.log(arg1, var1, arg2, var2, x)
      console.log(arguments[0])//argument keyword capture a all arg of current
                              //function..and form a array of arguments..it will not capture arg1..in this scope
    }
  
    return inner
    // return 10
  }
  
  let x = outer('param1', 11)
  
  // typeof x == 'function'
  // x == inner
  
  // scope of arg1 and var1 are from lines 2 to 10
  
  x('param2')

  /*CLOSURE SCOPE:when ever a funcn is created all the scope which is at
  at birth place of function are captured by function and they avilable 
  inside the function till the function exist in memory*/

  //  closure gives you access to an outer function’s scope from an inner function. 
  //In JavaScript, closures are created every time a function is created, at function creation time.

//another example of enclosed function
 /* function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12 */