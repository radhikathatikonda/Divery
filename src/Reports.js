import React, { useState } from 'react';
import './Reports.css'; // Ensure to create this CSS file for styling

function Reports() {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    agent: '',
    damaged: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleExportPDF = () => {
    // Dummy functionality for demonstration
    alert('Exporting to PDF...');
  };

  const handleExportExcel = () => {
    // Dummy functionality for demonstration
    alert('Exporting to Excel...');
  };

  return (
    <div className="reports">
      <h1>Reports</h1>
      <div className="filter-section">
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          placeholder="End Date"
        />
        <input
          type="text"
          name="agent"
          value={filters.agent}
          onChange={handleChange}
          placeholder="Delivery Agent"
        />
        <label>
          Damaged Goods Only
          <input
            type="checkbox"
            name="damaged"
            checked={filters.damaged}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="export-options">
        <button onClick={handleExportPDF}>Export to PDF</button>
        <button onClick={handleExportExcel}>Export to Excel</button>
      </div>
    </div>
  );
}

export default Reports;
