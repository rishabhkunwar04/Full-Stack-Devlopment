function a()
{
  return 1
}
console.log(123,typeof 123)
console.log(123.123, typeof 123.123)
console.log('a',typeof 'a')
console.log("abc" ,typeof "abc")
console.log(null, typeof null)
console.log(true,typeof true)
console.log(undefined,typeof undefined)
console.log(a(),typeof a())
//in javascript function can br passed as argument
//and is of type function
console.log(a,typeof a)

//javascript is dynamically typed lang so it has no any compile time error
//in javascript char and string && int float are same thing

function area(length,breadth){
  if(bradth==undefined)
  {
    return Math.PI * length*length
  }

}
console.log(4)