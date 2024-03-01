import React, { useState } from 'react';
import './TodaysDeliveryList.css'; // Ensure this CSS file is created as described previously

// Example delivery data
const initialDeliveries = [
  { id: 1, address: '123 Main St', priority: 'High', status: 'Pending', type: 'Perishable' },
  { id: 2, address: '456 Pine St', priority: 'Medium', status: 'Pending', type: 'Essential' },
  { id: 3, address: '789 Elm St', priority: 'Low', status: 'Pending', type: 'Emergency' },
];

function TodaysDeliveryList() {
  const [deliveries, setDeliveries] = useState(initialDeliveries);

  // Function to simulate updating the delivery status
  const handleUpdateStatus = (id, status) => {
    const updatedDeliveries = deliveries.map(delivery => (
      delivery.id === id ? { ...delivery, status: status } : delivery
    ));
    setDeliveries(updatedDeliveries);
  };

  return (
    <div>
      <h2>Today's Delivery List</h2>
      <ul className="delivery-list">
        {deliveries.map((delivery) => (
          <li key={delivery.id} className="delivery-item">
            <p>Address: {delivery.address}</p>
            <p>Priority: {delivery.priority}</p>
            <p>Type: {delivery.type}</p>
            <p>Status: {delivery.status}</p>
            <div className="button-group">
              <button className="button" onClick={() => handleUpdateStatus(delivery.id, 'Delivered')}>Mark as Delivered</button>
              <button className="button" onClick={() => handleUpdateStatus(delivery.id, 'Door Locked')}>Door Locked</button>
              <button className="button" onClick={() => handleUpdateStatus(delivery.id, 'Damaged')}>Report Damaged</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysDeliveryList;
