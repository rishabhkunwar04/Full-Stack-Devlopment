

/*callback:-A callback is a function that is executed after another function has finished executing.
 As we have studied earlier that functions are objects. Functions can take functions as arguments and
  can be returned by other functions. Functions that take another function as an argument are called higher-order 
functions. So, the callback function can also be defined as any function that is passed as an argument is called a callback function.
*/

//CALLBACK
/*
function addition(x, y , callback){
setTimeout(() => {
document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
callback(); 
 }, 5000); } 
 // display() function is called just after the ending of addition() function
function display(){ 
document.write('Numbers added!'); 
 } 
 // Calling addition() function
addition(5,5,display);//function is passed as argument so display function is callback here
*/


        //PROMISES
       function func1() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const error = true;
                if (!error) {
                    console.log('Function: Your promise has been resolved')
                    resolve();
                }
                else {
                    console.log('Function: Your promise has not been resolved')
                    reject('Sorry not fulfilled');
                }
            }, 2000);
        })
    }
    
    func1().then(function(){  //then ke andar wala function actually resolve funcn hai
        console.log("Harry: Thanks for resolving")
    }).catch(function(error){ //catch ke andar jo funcn pass kara hai actually wo reject funcn hai
        console.log("Harry: Very bad bro. Reason: " + error)
    })
    

    
//Async with promises

/*function someAsynctask(callback){
    console.log("begin of task ")
    setTimeout(function(){
        callback()
        console.log("end of task")
    },3000)
}

let someTaskPromise=function(){
    return new Promise(function(resolve,reject){
        someAsynctask(resolve)
    })
}
someTaskPromise()
        .then(function(){
            console.log("After end of prgm")
        })
        */