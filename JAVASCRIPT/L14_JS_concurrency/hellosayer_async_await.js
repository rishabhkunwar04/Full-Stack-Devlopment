function helloSlayer(times,name){
    return new Promise(function(resolve,reject){
        let count=0;
            let loopid=setInterval(() =>{
                count++;
                console.log('Hello '+name)
        
                if(count==times){
                    clearInterval(loopid)
                    resolve()
                }
               
        
            },100)      
    })
}
  //sequentially
    async function task(){
        await   helloSlayer(3,'Rishabh')
        await   helloSlayer(3,'Arnav')
        await   helloSlayer(2,'manish')
    }

    task()

    /*output of this code
    Hello Rishabh
Hello Rishabh
Hello Rishabh
Hello Arnav
Hello Arnav
Hello Arnav
Hello manish
Hello manish

    */

    /*Parallely
    
    async function task(){
           helloSlayer(3,'Rishabh')
           helloSlayer(3,'Arnav')
          helloSlayer(2,'manish')
    }

    task()
    */




       module.export={
        helloSlayer
    }