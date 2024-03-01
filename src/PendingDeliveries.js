import React, { useState } from 'react';
import './PendingDeliveries.css'; // Ensure you create this CSS file

// Mock data for pending deliveries
const initialPendingDeliveries = [
  { id: 4, address: '101 Oak St', priority: 'Medium', status: 'Pending', type: 'Essential' },
  { id: 5, address: '202 Pine St', priority: 'High', status: 'Pending', type: 'Perishable' },
  { id: 6, address: '303 Cedar St', priority: 'Low', status: 'Pending', type: 'Emergency' },
];

function PendingDeliveries() {
  const [deliveries, setDeliveries] = useState(initialPendingDeliveries);

  // Function to simulate updating the delivery status
  const handleUpdateStatus = (id, status) => {
    const updatedDeliveries = deliveries.map(delivery => (
      delivery.id === id ? { ...delivery, status: status } : delivery
    ));
    setDeliveries(updatedDeliveries);
  };

  return (
    <div className="pending-deliveries">
      <h2>Pending Deliveries</h2>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery.id} className="delivery-item">
            <p>Address: {delivery.address}</p>
            <p>Priority: {delivery.priority} - {delivery.type}</p>
            <p>Status: {delivery.status}</p>
            <div className="actions">
              <button onClick={() => handleUpdateStatus(delivery.id, 'Completed')}>Complete</button>
              <button onClick={() => handleUpdateStatus(delivery.id, 'Door Locked')}>Door Locked</button>
              <button onClick={() => handleUpdateStatus(delivery.id, 'Damaged')}>Damaged</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingDeliveries;
