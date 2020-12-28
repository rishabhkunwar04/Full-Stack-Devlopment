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

    async function task(){
           await Promise.all([
            helloSlayer(5,'Rishabh'),
            helloSlayer(2,'manish')
           ])
    }


    console.log("first Batch Over")

    async function task(){
        await Promise.all([
         helloSlayer(3,'Rahul'),
         helloSlayer(6,'Dicaprio')
        ])
 }

 task()



    
    module.export={
        helloSlayer
    }