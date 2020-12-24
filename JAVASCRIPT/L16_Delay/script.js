let btnWait=document.getElementById('btnWait')
let btnCount=document.getElementById('btnCount')
let divStatus=document.getElementById('divStatus')
let divVal=document.getElementById('divVal')

btnWait.onclick =function(){

  divStatus.textContent='WAITING'

  setTimeout(() => {
    divStatus.textContent = 'DONE'
  }, 5000)

}


let c=0
btnCount.onclick =function(){
    c++
    divVal.textContent=c
}