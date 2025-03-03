fetch ("https://jsonplaceholder.typicode.com/posts").then (res =>res.json()).then(data=>{
    
    for(i=0 ;i<data.length;i++){
        console.log(data[i].title)

    }

})