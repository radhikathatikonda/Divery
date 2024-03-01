import React, { useState } from 'react';
import './UpdateDeliveryStatus.css'; // Ensure you have this CSS file

function UpdateDeliveryStatus() {
  const [status, setStatus] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [signature, setSignature] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the form submission, 
    // such as sending the data to a server or updating the state
    console.log({ status, customerName, signature, reason });
    // Reset form fields (optional)
    setStatus('');
    setCustomerName('');
    setSignature('');
    setReason('');
  };

  return (
    <form className="update-delivery-form" onSubmit={handleSubmit}>
        <h1>Update Delivery Status</h1>
      <label>Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="Delivered">Delivered</option>
          <option value="Door Locked">Door Locked</option>
          <option value="Damaged">Damaged</option>
          <option value="Returned">Returned</option>
        </select>
      </label>
      <label>Customer Name:
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
      </label>
      <label>Signature:
        <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} required />
      </label>
      {status === 'Door Locked' || status === 'Damaged' || status === 'Returned' ? (
        <label>Reason:
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
        </label>
      ) : null}
      <button type="submit">Update Status</button>
    </form>
  );
}

export default UpdateDeliveryStatus;
