import React, { useState } from "react";

export default function DistinguishProducts() {
  const [data, setData] = useState([
    {
      productId: 1,
      productName: "Laptop",
      productCategory: "Electronics",
      isDamaged: "Damaged",
      isPerishable: false,
      expiryDate: null,
    },
    {
      productId: 2,
      productName: "Smartphone",
      productCategory: "Electronics",
      isDamaged: "Damaged",
      isPerishable: false,
      expiryDate: null,
    },
    {
      productId: 3,
      productName: "Milk",
      productCategory: "Groceries",
      isDamaged: "NO-Damaged",
      isPerishable: true,
      expiryDate: "2024-02-20",
    },
    {
      productId: 4,
      productName: "Bananas",
      productCategory: "Groceries",
      isDamaged: "No-Damaged",
      isPerishable: true,
      expiryDate: "2024-02-18",
    },
    {
      productId: 5,
      productName: "Chair",
      productCategory: "Furniture",
      isDamaged: "No-Damaged",
      isPerishable: false,
      expiryDate: null,
    },
  ]);

  const selecteCategory = (event) => {
    debugger
    if(event.target.value === ""){

    }
  };
  return (
    <div>
      <h1>Distinguish the products</h1>
      <select onChange={selecteCategory}>
        <option> </option>
        <option>Product Category</option>
        <option>Damaged or Not Damaged </option>
        <option>Perishable </option>
        <option>Expiry Data</option>
      </select>
      <table className="table">
        {data.length > 0 && (
          <>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((i) => (
                <tr key={i.deliveryId}>
                  {Object.values(i).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}
