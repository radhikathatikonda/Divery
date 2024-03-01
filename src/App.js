import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
//import Dashboard from './Dashboard';
//import Spaceownerdashboard from './Spaceownerdashboard';
import DeliveryDashboard from './deliveryDashboard';

import InventoryDashboard from './InventoryDashboard';
import InventoryManagement from './InventoryManagement';
import UploadInventoryFile from './UploadInventoryFile';
import InventoryCheckViewPage from './InventoryCheckView';
import UpdateInventoryForDelivery from './UpdateInventoryForDelivery';
import DeliveryTracking from './DeliveryTracking';
import TodaysDeliveryList from './TodaysDeliveryList';
import PendingDeliveries from './PendingDeliveries';
import UpdateDeliveryStatus from './UpdateDeliveryStatus';
import Reports from './Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/inventorydashboard" element={<InventoryDashboard/>} />
        <Route path="/inventory-management" element={<InventoryManagement/>} />
        
          <Route path="/upload-inventory-file" element={<UploadInventoryFile />}/>
          <Route path="/inventory-check-view" element={<InventoryCheckViewPage/>}/>
          <Route path="/update-inventory-delivery" element={<UpdateInventoryForDelivery/>}/>
          <Route path="/delivery-tracking" element={<DeliveryTracking/>}/>
          <Route path="/delivery-tracking" element={<DeliveryTracking/>}/>
        <Route path="/reports" element={<Reports />} />
        <Route path="/deliverydashboard" element={<DeliveryDashboard/>}/>
        <Route path="/todays-delivery-list" element={<TodaysDeliveryList />} />
        <Route path="/pending-deliveries" element={<PendingDeliveries />} />
        <Route path="/update-delivery-status" element={<UpdateDeliveryStatus />} />
      </Routes>
    </Router>
  );
}
export default App;