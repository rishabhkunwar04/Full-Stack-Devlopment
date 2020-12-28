/** 
 * Concurrency means multiple computations are happening at the same time. 
 
 
 In Javascript, the interpreter does not
  have multiple threads, which means we have to make do with a single thread, 
  but despite that, using the event loop (that can handle timeouts and intervals), we can achieve concurrency in Javascript. 

Although the tasks are running on the same thread, they appear to 
run parallely. But if we block the thread, we see that both tasks stop.

 */
//concurrency work on single thread

 function helloSlayer(times,name){
    let count=0;
    let loopid=setInterval(() =>{
        count++;
        console.log('Hello '+name)

        if(count==times){
            clearInterval(loopid)

        }
   
    },100)

 }

 helloSlayer(3,'Rishabh')
 helloSlayer(2,'billionare')

 module.export={
     helloSlayer
 }

 /**
  //output of this code
  
helloSlayer.js:15 HelloRishabh
helloSlayer.js:15 Hellobillionare
helloSlayer.js:15 HelloRishabh
helloSlayer.js:15 Hellobillionare
helloSlayer.js:15 HelloRishabh
  */