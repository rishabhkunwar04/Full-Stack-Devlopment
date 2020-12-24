/*==(abstract equality comparison):-it compares to value for equality
 after converting both value to a common type after conversion the final equality
 conversion is per formed as "===",,,type conversion take place only when
 datatypes are different if same then no any type conversion take place  */

 /*===(strict equality comparison):-in this value is not internally converted to common type
 if type is different then the value is considered unequal
*/
console.log(1 == '1') // true
console.log(1 === '1') // false
 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false,becuz number("false")=NAN  and number(false)=0

console.log('' == false) // true, both typecast to 0

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false,becuz both array are different stored at different place in the memory