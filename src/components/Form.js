import React, { useState } from 'react';

function Form({ addItem }) {
  const [formData, setFormData] = useState({
    id: '',
    price: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: formData.id,
      price: parseFloat(formData.price),
      name: formData.name,
    };

    addItem(newItem);

  
    setFormData({
      id: '',
      price: '',
      name: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Product ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Selling Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Form;
