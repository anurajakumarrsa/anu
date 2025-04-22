import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Table = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState(1)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then(response => {
        setUsers(response.data)
        if (response.data.length > 0) {
          const lastId = Math.max(...response.data.map(user => user.id)) 
          setId(lastId + 1)
        }
      })
      .catch(error => {
        console.error("Error loading data:", error)
      })
  }, []) 

  const handle_click = () => {
    const User = {
      id: id,
      name: name,
      age: age
    }

    axios.post("http://localhost:3001/posts", User)
      .then(response => {
        setId(id + 1)
        setName('')
        setAge('')
        setUsers(users => [...users, response.data])
      })
      .catch(error => {
        console.error("There was an error posting the data!", error)
      })
  }

  return (
    <>
      <label>Name:</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <label>Age:</label>
      <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
      <button onClick={handle_click}>Submit</button><br /><br />

      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table