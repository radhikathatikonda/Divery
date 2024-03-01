import React, { useState } from 'react';
import './DeliveryTracking.css'; // Ensure to create this CSS file for styling

const initialDeliveries = [
  { sku: 'SKU1', agent: 'Agent1', status: 'Delivered', date: '2023-01-01' },
  { sku: 'SKU2', agent: 'Agent2', status: 'In Transit', date: '2023-01-02' },
  // Add more delivery records as needed
];

function DeliveryTracking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deliveries, setDeliveries] = useState(initialDeliveries);
  const [filteredDeliveries, setFilteredDeliveries] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = deliveries.filter(delivery =>
      delivery.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.agent.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDeliveries(results);
  };

  return (
    <div className="delivery-tracking">
      <h1>Delivery Tracking</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Product SKU or Delivery Agent"
          required
        />
        <button type="submit">Search</button>
      </form>
      <div className="delivery-info">
        {filteredDeliveries.map((delivery, index) => (
          <div key={index} className="delivery-record">
            <p><strong>SKU:</strong> {delivery.sku}</p>
            <p><strong>Agent:</strong> {delivery.agent}</p>
            <p><strong>Status:</strong> {delivery.status}</p>
            <p><strong>Date:</strong> {delivery.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryTracking;
