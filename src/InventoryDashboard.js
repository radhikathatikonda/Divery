import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './InventoryDashboard.css';


function InventoryDashboard() {
  return (
    <div>
      <h1 className="h1">Inventory Team Dashboard</h1>
      <nav>
        <Link to="/inventory-management">Inventory Management</Link>

        <Link to="/upload-inventory-file">Upload Inventory File</Link>

        <Link to="/inventory-check-view">Inventory Check/View</Link>

        <Link to="/update-inventory-delivery">
          Update Inventory for Delivery
        </Link>

        <Link to="/delivery-tracking">Delivery Tracking</Link>

        <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
}

export default InventoryDashboard;

// import React from 'react'

// function InventoryDashboard() {
//     return (
//         <div>radhika is a good girl</div>
//     )
// }

// export default InventoryDashboard

// // import Nav from "react-bootstrap/Nav";
// import { Tabs, Tab } from "react-bootstrap";
// import React from "react";
// import InventoryReports from "./InventoryReports";
// import UploadInventoryFile from "./UploadInventoryFile";
// import DistinguishProducts from "./DistinguishProducts";
// import { useState } from "react";
// export default function InventoryDashboard({ activeKey }) {
//   debugger;
//   //   const [selectedOption, setSelectedOption] = useState('');
//   //     const [tableData, setTableData] = useState([]);
//   //   const handleTabChange = (key) => {
//   //     // Reset the state variables to clear the data
//   //     setSelectedOption('');
//   //     setTableData([]);
//   // };
//   const customStyles = {
//     // Add your custom CSS properties here
//     // Example:
//     backgroundColor: "lightblue",
//     padding: "20px",
//     border: "1px solid blue",
//   };
//   return (
//     <>
//       <Tabs
//         className="justify-content-center"
//         defaultActiveKey={1}
//         id="uncontrolled-tab-example"
//         style={customStyles}
//       >
//         <Tab eventKey={1} title="upload the inventory file">
//           <UploadInventoryFile></UploadInventoryFile>
//         </Tab>
//         <Tab eventKey={2} title="Distinguish the products">
//           <DistinguishProducts></DistinguishProducts>
//         </Tab>
//         <Tab eventKey={3} title="Reports">
//           <InventoryReports></InventoryReports>
//         </Tab>
//       </Tabs>
//       ;
//     </>
//   );
// }
