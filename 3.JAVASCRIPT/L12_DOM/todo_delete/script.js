window.onload=function(){
  let inp=document.getElementById('inp')
  let btn=document.getElementById('btn')
  let todolist=document.getElementById('todolist')

  btn.onclick=function(){
    let li=document.createElement('li')
    li.innerText=inp.value          // todolist.innerHTML+=`<li>${inp.value}</li>`//this way rntire list is refreshing so it may affect performance
    let xbtn=document.createElement('button')
    xbtn.innerText='X'

    xbtn.onclick=function(event){
        event.target.parentElement.remove()

    }
     //li.appendChild('xbtn')
    //todolist.appendChild('li')
     
     
  }


}