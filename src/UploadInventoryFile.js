import React, { useState } from 'react';
import './UploadInventoryFile.css'; // Make sure to create this CSS file

function UploadInventoryFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
    // Process the file upload here
    // For demonstration, we'll just log the file name
    console.log('Uploading', selectedFile.name);
    alert(`File ${selectedFile.name} uploaded successfully!`);
  };

  return (
    <div className="upload-container">
      <h2>Upload Inventory File</h2>
      <input type="file" onChange={handleFileChange} accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
      <button onClick={handleUpload}>Upload</button>
      <div className="instructions">
        <p>Please upload the inventory file in CSV or Excel format.</p>
      </div>
    </div>
  );
}

export default UploadInventoryFile;
