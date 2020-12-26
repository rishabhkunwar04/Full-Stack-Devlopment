let socket=io()  //this io connect server to client by creating pipeline between them

let btn=document.getElementById('boom');
btn.onclick=function()
{
    socket.emit('boom')//it create event boom in socket
}
socket.on('BoomBoom',()=>{
    let div=document.createElement('div')
    div.innerText='BoomBoom'
    document.body.appendChild(div)
})