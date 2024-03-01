// import React from 'react'

// function DeliveryDashboard() {
//     return (
//         <div>rtyuiopdtrfgyhujkghjk</div>
//     )
// }

// export default DeliveryDashboard
import React from 'react';
import { Link } from 'react-router-dom';
import './DeliveryDashboard.css'; // Make sure to create and style your component accordingly

function DeliveryDashboard() {
  return (
    <div className="delivery-dashboard">
      <h1>Delivery Team Dashboard</h1>
      <nav className="delivery-nav">
        <Link to="/todays-delivery-list">Today’s Delivery List</Link>
        <Link to="/pending-deliveries">Pending Deliveries</Link>
        <Link to="/update-delivery-status">Update Delivery Status</Link>
      </nav>
    </div>
  );
}

export default DeliveryDashboard;

