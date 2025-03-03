fetch("https://jsonplaceholder.typicode.com/todos").then(output => output.json()).then(out => {
    for(let i=0;i<out.length;i++){
        let body=document.getElementById("tbd")
        let row=document.createElement("tr")
        row.innerHTML=`
        <td>${i+1}</td>
        <td>${out[i].userId}</td>
        <td>${out[i].id}</td>
        <td>${out[i].title}</td>
        <td>${out[i].completed}</td>
        <td><button onclick="edit(this)">EDIT</button></td>
        <td><button onclick="del(this)">DELETE</button></td>`
        body.appendChild(row)
    }
})
function edit(btn){
    let row=btn.parentNode.parentNode
    let title=row.children[3]
    let completed=row.children[4]
    if(btn.textContent === "EDIT"){
        title.contentEditable = true
        completed.contentEditable = true
        btn.textContent = "SAVE" 
    } else {
        title.contentEditable = false
        completed.contentEditable = false
        btn.textContent = "EDIT"
    }
}


function del(btn){
    btn.parentNode.parentNode.remove()
    let row=document.querySelectorAll("#tbd tr")
    for(i=0;i<row.length;i++){
        row[i].children[0].textContent=i+1
    }
}

