
import React, { useState } from 'react';
import './InventoryManagement.css';

function InventoryManagementPage() {
  const [inventoryItem, setInventoryItem] = useState({
    sku: '',
    name: '',
    category: '',
    quantity: '',
    status: 'Not Damaged', // Default value
    perishability: false,
    expiryDate: '',
  });
  const [inventoryList, setInventoryList] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    status: '',
    perishability: false,
    expiryDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInventoryItem({
      ...inventoryItem,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInventoryList([...inventoryList, inventoryItem]);
    setInventoryItem({
      sku: '',
      name: '',
      category: '',
      quantity: '',
      status: 'Not Damaged',
      perishability: false,
      expiryDate: '',
    });
  };

  const applyFilters = () => {
    return inventoryList.filter(item =>
      (filters.category ? item.category === filters.category : true) &&
      (filters.status ? item.status === filters.status : true) &&
      (filters.perishability ? item.perishability === filters.perishability : true) &&
      (filters.expiryDate ? item.expiryDate === filters.expiryDate : true)
    );
  };

  return (
    <div>
      {/* Form to enter inventory details */}
      <h1>Inventory Management</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for inventory item details */}
        <div>
          <label>Product SKU:</label>
          <input name="sku" value={inventoryItem.sku} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input name="name" value={inventoryItem.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input name="category" value={inventoryItem.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={inventoryItem.quantity} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={inventoryItem.status} onChange={handleChange}>
            <option value="Damaged">Damaged</option>
            <option value="Not Damaged">Not Damaged</option>
          </select>
        </div>
        <div>
          <label>Perishability:</label>
          <input type="checkbox" name="perishability" checked={inventoryItem.perishability} onChange={handleChange} />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="date" name="expiryDate" value={inventoryItem.expiryDate} onChange={handleChange} />
        </div>
        <button type="submit">Add/Update Inventory</button>
      </form>

      {/* Inventory listing with filters */}
      <div>
        <h2>Filters</h2>
        {/* Filter fields similar to inventory fields */}
        <div>
          <label>Category:</label>
          <input name="category" value={filters.category} onChange={handleFilterChange} />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Damaged">Damaged</option>
            <option value="Not Damaged">Not Damaged</option>
          </select>
        </div>
        {/* Add additional filters as necessary */}
      </div>

      <div>
        <h2>Inventory List</h2>
        <ul>
          {applyFilters().map((item, index) => (
            <li key={index}>
              {item.sku} - {item.name} - {item.category} - {item.quantity} - {item.status} - {item.perishability ? 'Perishable' : 'Not Perishable'} - {item.expiryDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventoryManagementPage;
