function a(){
    return "1"
}
console.log(b())
//console.log(c())//reference error
function b(){
    return "2"
}

let c=function(){ //function defined this way is not hoisted so we cant execute before defining function
    return "3"     //if we try to execute it before it give reference error
}
console.log(a())

function area(length,breadth){
    if(breadth==undefined) //or if(!bradth)
    {
      return Math.PI * length*length
    }
  
  }
  console.log("area:",area(4))

  function sample()
  {
    console.log("javascript",arguments[0]+arguments[1])

  }
  sample(1,2)
  sample("rishabh","kunwar")