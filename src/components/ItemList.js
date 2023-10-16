import React from 'react';

function ItemList({ items, handleDelete, totalPrice }) {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Total Price Spent</h2>
      <p>Total: ₹{totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default ItemList;
