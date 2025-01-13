import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [fileExtensions, setFileExtensions] = useState([]);
  const [uploadedExtensions, setUploadedExtensions] = useState([]);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/extensions"
        );
        setUploadedExtensions(response.data.map((item) => item.extension));
      } catch (error) {
        console.error("Failed to fetch extensions:", error);
      }
    };

    fetchExtensions();
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop();
      setFileExtensions((prevExtensions) => [...prevExtensions, extension]);

      try {
        await axios.post("http://localhost:4000/api/extensions", { extension });
        setUploadedExtensions((prev) => [...prev, extension]);
      } catch (error) {
        console.error("Failed to save extension:", error);
      }

      alert(`File Extension: ${extension}`);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <input type="file" onChange={handleFileUpload} className="file-input" />
      {uploadedExtensions.length > 0 && (
        <div className="file-list">
          <h3>Stored Extensions:</h3>
          <ul>
            {uploadedExtensions.map((ext, index) => (
              <li key={index}>{ext}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
