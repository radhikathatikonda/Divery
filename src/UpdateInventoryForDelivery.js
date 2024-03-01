import React, { useState } from 'react';
import './UpdateInventoryForDelivery.css'; // Make sure to create this CSS file for styling

const initialInventory = [
  { sku: 'SKU1', name: 'Product 1', quantity: 100 },
  { sku: 'SKU2', name: 'Product 2', quantity: 200 },
  // Add more products as needed for demonstration
];

function UpdateInventoryForDelivery() {
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inventory, setInventory] = useState(initialInventory);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const product = inventory.find(item => item.sku === sku);
    if (product) {
      setSelectedProduct(product);
      setQuantity(product.quantity);
    } else {
      alert('Product not found');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInventory = inventory.map(item => {
      if (item.sku === sku) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setInventory(updatedInventory);
    alert('Inventory updated successfully');
  };

  return (
    <div className="update-inventory">
      <h1>Update Inventory For Delivery</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="Product SKU"
          required
        />
        <button type="submit">Search</button>
      </form>
      {selectedProduct && (
        <form onSubmit={handleSubmit} className="update-form">
          <div>
            <label>Product Name: {selectedProduct.name}</label>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Inventory</button>
        </form>
      )}
    </div>
  );
}

export default UpdateInventoryForDelivery;
