window.onload=function(){
    let inp=document.getElementById('inp')
    let list=document.getElementById('list')
    let print=document.getElementById('print')

    print.onclick=function(){
        let start_time=new Date().getTime()
        let N=parseInt(inp.value)
        let temp=''
        for(let i=1;i<=N;i++)
        {
          temp+='<li>'+i+'</li>';  
        }
        list.innerHTML=temp
        console.log(new Date()-start_time)
    }


}