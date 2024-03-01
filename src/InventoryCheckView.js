import React, { useState } from 'react';
import './InventoryCheckView.css'; // Ensure to create this CSS file for styling

const initialInventoryItems = [
  { sku: 'SKU1', name: 'Item 1', category: 'Category 1', status: 'Not Damaged', perishability: false, expiryDate: '2023-12-31' },
  { sku: 'SKU2', name: 'Item 2', category: 'Category 2', status: 'Damaged', perishability: true, expiryDate: '2023-11-30' },
  // Add more items as needed
];

function InventoryCheckView() {
  const [filters, setFilters] = useState({
    sku: '',
    category: '',
    status: '',
    perishability: false,
    expiryDate: '',
  });
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const filteredInventoryItems = inventoryItems.filter(item => {
    return (filters.sku ? item.sku.includes(filters.sku) : true) &&
           (filters.category ? item.category === filters.category : true) &&
           (filters.status ? item.status === filters.status : true) &&
           (filters.perishability ? item.perishability === Boolean(filters.perishability) : true) &&
           (filters.expiryDate ? item.expiryDate === filters.expiryDate : true);
  });

  return (
    <div className="inventory-check-view">
      <h1>Inventory Check/View</h1>
      <div className="filter-section">
        {/* Filter inputs */}
        <input name="sku" placeholder="SKU" value={filters.sku} onChange={handleFilterChange} />
        <input name="category" placeholder="Category" value={filters.category} onChange={handleFilterChange} />
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">Select Status</option>
          <option value="Damaged">Damaged</option>
          <option value="Not Damaged">Not Damaged</option>
        </select>
        <label>
          <input type="checkbox" name="perishability" checked={filters.perishability} onChange={handleFilterChange} />
          Perishable
        </label>
        <input type="date" name="expiryDate" value={filters.expiryDate} onChange={handleFilterChange} />
      </div>
      <div className="inventory-list">
        {/* Inventory items list */}
        {filteredInventoryItems.map((item, index) => (
          <div key={index} className="inventory-item">
            {item.sku}, {item.name}, {item.category}, {item.status}, {item.perishability ? 'Perishable' : 'Not Perishable'}, {item.expiryDate}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryCheckView;