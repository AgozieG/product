import { useState, useEffect } from 'react';
import './Game.css';

export default function Game() {
  // 1. READ: Pull from localStorage on load
  const [inventory, setInventory] = useState(() => {
    const savedData = localStorage.getItem('game_database');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState(1);

  // 2. AUTO-SAVE: Write changes straight to the pseudo-DB
  useEffect(() => {
    localStorage.setItem('game_database', JSON.stringify(inventory));
  }, [inventory]);

  // 3. CREATE: Add entry to DB array
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;

    const newItem = {
      id: Date.now(), // Acts like a Database Primary Key
      name: itemName,
      quantity: Number(itemQty),
    };

    setInventory([...inventory, newItem]);
    setItemName('');
    setItemQty(1);
  };

  // 4. UPDATE: Modify data inline
  const handleIncreaseQty = (id) => {
    const updated = inventory.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setInventory(updated);
  };

  const handleDecreaseQty = (id) => {
    const updated = inventory.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setInventory(updated);
  };

  // 5. DELETE: Remove entry entirely
  const handleDeleteItem = (id) => {
    const filtered = inventory.filter((item) => item.id !== id);
    setInventory(filtered);
  };

  return (
    <div className="game-container">
      <h1>🎒 RPG INVENTORY DB</h1>
      
      {/* Input Form (CREATE) */}
      <form onSubmit={handleAddItem} className="db-form">
        <input 
          type="text" 
          placeholder="ITEM NAME..." 
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="pixel-input input-name"
        />
        <input 
          type="number" 
          min="1"
          value={itemQty}
          onChange={(e) => setItemQty(e.target.value)}
          className="pixel-input input-qty"
        />
        <button type="submit" className="pixel-btn btn-add">ADD</button>
      </form>

      {/* Database Display Area (READ) */}
      <div className="chest-box">
        <h3>DATABASE ENTRIES:</h3>
        {inventory.length === 0 ? (
          <p className="empty-text">CHEST IS EMPTY!<br/>AWAITING DATA...</p>
        ) : null}
        
        <ul className="inventory-list">
          {inventory.map((item) => (
            <li key={item.id} className="inventory-item">
              <span className="item-text">
                {item.name} <strong>x{item.quantity}</strong>
              </span>
              <div className="action-btns">
                {/* UPDATE Button */}
                <button onClick={() => handleIncreaseQty(item.id)} className="pixel-btn btn-up">
                  +1
                </button>
                <button onClick={() => handleDecreaseQty(item.id)} className="pixel-btn btn-up">
                  -1
                </button>
                {/* DELETE Button */}
                <button onClick={() => handleDeleteItem(item.id)} className="pixel-btn btn-del">
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
