import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  const addItem = () => {
    const newItem = { id: Date.now(), name };
    setItems([...items, newItem]);
    setName('');
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
