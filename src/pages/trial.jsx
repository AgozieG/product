import {useState, useEffect} from 'react';
import './trial.css';

export default function Game() {
    const [inventory, setInventory] = useState(() => {
        const savedData = localStorage.getItem('game_database');
        return savedData ? JSON.parse(savedData) : [];
    });

    const [itemName, setItemName] = useState("")
    const [itemQty, setItemQty] = useState(1);

    useEffect(() => {
        localStorage.setItem('game_database', JSON.stringify(inventory));
    }, [inventory]);

    const handleAddItem = (e) => {
        e.preventDefault();
        if (!itemName.trim()) return;

        const newItem = {
            id: Date.now(),
            name: itemName,
            quantity: Number(itemQty)
        };

        setInventory([...inventory, newItem]);
        setItemName('');
        setItemQty(1)
    };

    const handleIncreaseQty = (id) => {
        const updated = inventory.map((item) => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setInventory(updated)
    }

    const handleDeleteItem = (id) => {
        const filtered = inventory.filter((item) => item.id !== id);
        setInventory(filtered)
    };

    return (
        <div className='game-container'>
            <h1>RPG INVENTORY DB</h1>

            <form onSubmit={handleAddItem}>
                <input 
                    type="text"
                    placeholder='ITEM NAME...'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className='pixel-input input-name' 
                />

                <input 
                    type="number"
                    min="1"
                    value={itemQty}
                    onChange={(e) => setItemQty(e.target.value)} 
                    className='pixel-input input-qty'
                />
                <button
                    type='submit'
                    className='pixel-btn btn-add' >ADD
                </button>
            </form>

            <div className='chest-box'>
                <h3>DATABASE ENTRIES</h3>
                {inventory.length === 0 ? (<p className='emprty-text'>CHEST IS EMPTY!! <br /> AWAITING DATA...</p>
                ) : null}

                <ul className='inventory-list'>
                    {inventory.map((item) => (
                        <li key= {item.id} className='inventory-item'>
                            <span className='item-text'>
                                {item.name} <strong>x{item.quantity}</strong>
                            </span>
                            <div className='action-btns'>
                                <button onClick={() => handleIncreaseQty(item.id)} className='pixel-btn btn-up'>+1</button>
                                <button onClick={() => handleDeleteItem(item.id)}>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
