fetch ("https://jsonplaceholder.typicode.com/posts").then (res =>res.json()).then(data=>{

    count =1
         for(i=0 ;i<data.length ;i++){

    
                // var table = document.getElementById("tab")
                //  var row = document.createElement("tr")
                //  table.appendChild(row)

                //    var c = document.createElement("td")
                //     c.innerHTML=count++
                //     row.appendChild(c)

                //    var d= document.createElement("td")
                //     d.innerHTML = data[i].userId
                //     row.appendChild(d)

                //    var e = document.createElement("td")
                //     e.innerHTML = data[i].id
                //     row.appendChild(e)

                //     var f = document.createElement("td")
                //     f.innerHTML = data[i].title
                //     row.appendChild(f)

                //     var g = document.createElement("td")
                //     g.innerHTML = data[i].body
                //     row.appendChild(g)



                                                         //or
                                                         
                var table = document.getElementById("tab")
                  var row = document.createElement("tr")
                  var c = document.createElement("td")
                  var d = document.createElement("td")
                  var e = document.createElement("td")
                  var f = document.createElement("td")
                  var g = document.createElement("td")
                  c.innerHTML=count++
                  d.innerHTML = data[i].userId
                  e.innerHTML = data[i].id
                  f.innerHTML = data[i].title
                  g.innerHTML = data[i].body
                  row.appendChild(c)
                  row.appendChild(d)
                  row.appendChild(e)
                  row.appendChild(f)
                  row.appendChild(g)
                  table.append(row)

    
                   
                   }
                })
            
    
