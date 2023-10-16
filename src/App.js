import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);

    const newTotalPrice = storedItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, []);

  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    localStorage.setItem('items', JSON.stringify(updatedItems));

    setTotalPrice(totalPrice + newItem.price);
  };

  const handleDelete = (itemId) => {
    const deletedItem = items.find((item) => item.id === itemId);
    if (deletedItem) {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);

      localStorage.setItem('items', JSON.stringify(updatedItems));
      setTotalPrice(totalPrice - deletedItem.price);
    }
  };

  return (
    <div className="App">
      <h1>Add Products</h1>
      <Form addItem={addItem} />
      <ItemList items={items} handleDelete={handleDelete} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
