
/*
//loop

let arr=[1,2,3,4];
console.log(arr[2]);
console.log(typeof(arr));//return object
let arr1=[2,"apple",false,[1,2,3]];//hetrogeneous arr

for (let vals of arr1){
    console.log(vals);
}

for(let index in arr1)
{
    console.log(index);
}
*/

//push and pop is used to add/remove item at last
/* let arr2=[1,"lemon","budha"]
arr2.push(2,"einstien")
console.log(arr2)
arr2.pop()
console.log(arr2) */


//shift and unshift is used to add/remove item at starting
/*  let arr2=[1,"lemon","budha"]
 arr2.unshift("steve jobs") //add item at start
 console.log(arr2)
arr2.shift()
 console.log(arr2) */



 //SLICE ,it didnt change the original array that dint get affected

/*let arr=['a','b','c','d','e','f']
 console.log(arr.slice(1,3))//give item from index 1 to index 3
*/


//SPLICE,it changes the original arr

 /* let arr=['a','b','c','d','e','f']
let omit= arr.splice(3,2) //two item from index 3 got removed from arr and stored in omit
console.log(omit)//removed item will print
console.log(arr)//changed array will print

let x= arr.splice(3,'hello','hi')//it removed item after index 3 in changed arr
                                  //and add hello and hi in that arr
console.log(x)//
console.log(arr)//
 */


 //CONCAT,it also dint affect the original array
  let arr=['a','b','c','d','e','f']
  console.log(arr.concat([1,2,3,4]))
  console.log(arr.concat("add",[1,2,3,4]))












