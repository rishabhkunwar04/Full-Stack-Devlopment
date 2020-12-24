function helloSlayer(times,name,doneSaying){
    let count=0;
    let loopid=setInterval(() =>{
        count++;
        console.log('Hello '+name)

        if(count==times){
            clearInterval(loopid)
            doneSaying()

        }
   
    },100)

 }

 helloSlayer(3,'Rishabh',function(){
     helloSlayer(2,'Arnav',function(){
         helloSlayer(3,'Ritik')
     })
 })

 module.export={
     helloSlayer
 }

 /* output of this code

Hello Rishabh
Hello Rishabh
Hello Rishabh
Hello Arnav
Hello Arnav
Hello Ritik
Hello Ritik
Hello Ritik
 */