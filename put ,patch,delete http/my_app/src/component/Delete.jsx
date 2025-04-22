import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(res => setItems(res.data))
      .catch(err => console.error('Fetch failed:', err));
  }, []);

  const deleteItem = (id, name) => {
    if (id === "1" && name === "abi") {
      axios.delete(`http://localhost:3001/posts/${id}`)
        .then(() => {
          setItems(items.filter(item => item.id !== id));
        })
        .catch(error => console.error('Delete failed:', error));
    } else {
      console.log("Only the item with id='2' and name='sreeram' can be deleted.");
    }
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} ({item.email})
          <button onClick={() => deleteItem(item.id, item.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;