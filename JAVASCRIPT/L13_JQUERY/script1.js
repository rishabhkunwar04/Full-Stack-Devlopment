$(() =>{      //function() ~ ()=>
    let inp=$('#inp')
    let list=$('#list')

    $('#prepend').click(() =>{
        let text=inp.val()
        list.prepend($(`<li>${text}</li>`))
    })

    $('#append').click(() =>{
        let text=inp.val()
        list.append($(`<li>${text}</li>`))
    })

    
})