import React from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap"; // Import Form from react-bootstrap

export default function InventoryReports() {
  
  const [reports, setReports] = useState([
    {
      value: "1",
      label: "List of goods that were delivery in the given date range",
    },
    { value: "2", label: "List of damaged goods in delivery transit" },
    { value: "3", label: "List of pending delivery by each delivery agent" },
  ]);
  // State to store selected value
  const [selectedValue, setSelectedValue] = useState("");
  var [bindData, setBindData] = useState([]);
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    debugger;
    if (event.target.value === "1") {
      getDeliveryData();
    } else if (event.target.value === "2") {
      getDamageData();
    } else if (event.target.value === "3") {
      getPendingDeliveryData();
    }else if (event.target.value === 'Open this select menu') {
       
    }
  };
  const getDeliveryData = () => {
    
    debugger;
    const newData = [
      {
        deliveryId: "1",
        productName: "Laptop",
        quantity: 2,
        deliveryDate: "2024-02-10",
      },
      {
        deliveryId: "2",
        productName: "Smartphone",
        quantity: 3,
        deliveryDate: "2024-02-12",
      },
      {
        deliveryId: "3",
        productName: "Tablet",
        quantity: 1,
        deliveryDate: "2024-02-13",
      },
      {
        deliveryId: "4",
        productName: "Printer",
        quantity: 1,
        deliveryDate: "2024-02-11",
      },
    ];

    setBindData(newData); // Update bindData state with the new array
  };
  const getDamageData = () => {
    const newData1 = [
      {
        productId: "1",
        productName: "Television",
        quantity: 1,
        damageDescription: "Cracked screen",
        deliveryDate: "2024-02-10",
      },
      {
        productId: "2",
        productName: "Refrigerator",
        quantity: 1,
        damageDescription: "Dented door",
        deliveryDate: "2024-02-11",
      },
      {
        productId: "3",
        productName: "Washing machine",
        quantity: 2,
        damageDescription: "Broken control panel",
        deliveryDate: "2024-02-12",
      },
    ];
    setBindData(newData1);
  };
  const getPendingDeliveryData = () => {
    // Implementation of getDeliveryData function
    console.log("Getting delivery data...");
    const newData2 = [
      {
        agentId: "1",
        agentName: "John Doe",

        deliveryId: "1",
        productName: "Laptop",
        quantity: 1,
        customerName: "Alice",
        deliveryDate: "2024-02-10",
      },
      {
        agentId: "2",
        agentName: "Jane Smith",

        deliveryId: "3",
        productName: "Tablet",
        quantity: 1,
        customerName: "Charlie",
        deliveryDate: "2024-02-10",
      },
    ];
    setBindData(newData2);
  };

  return (
    // <div className="d-flex justify-content-center align-items-center vh-60">
    <div>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label className="mb-4 fw-bold">Inventory Reports</Form.Label>
          <br />
          <Form.Label className="mb-4">Select an option:</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={handleSelectChange}
            value={selectedValue}
          >
            <option>Open this select menu</option>
            {/* Map over options and create option elements */}
            {reports.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Text className="text-muted">
          Selected value: {selectedValue}
        </Form.Text>
        <table className="table">
          {bindData.length > 0 && (
            <>
              <thead>
                <tr>
                  {Object.keys(bindData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bindData.map((delivery) => (
                  <tr key={delivery.deliveryId}>
                    {Object.values(delivery).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </Form>
    </div>
  );
}
