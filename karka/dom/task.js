fetch ("./task.json").then (res =>res.json()).then(data=>{


    var p= document.getElementById("task")
    p.innerHTML= `name :${data.product.name}`
    
    
})


