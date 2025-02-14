fetch ("https://jsonplaceholder.typicode.com/posts").then (res =>res.json()).then(data=>{
         for(i=0 ;i<data.length ;i++){

    
                var a = document.getElementById("tab")
                 const b = document.createElement("tr")
                 a.appendChild(b)

                    var c = document.createElement("td")
                    c.innerHTML=i
                    b.appendChild(c)

                    
                    var d= document.createElement("td")
                    d.innerHTML = data[i].userId
                    b.appendChild(d)
    
                    var e = document.createElement("td")
                    e.innerHTML = data[i].id
                    b.appendChild(e)
    
                    var f = document.createElement("td")
                    f.innerHTML = data[i].title
                    b.appendChild(f)

                    var g = document.createElement("td")
                    g.innerHTML = data[i].body
                    b.appendChild(g)
    
                   
                   }
                })
            
    

