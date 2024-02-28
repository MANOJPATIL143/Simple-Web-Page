// Upload.js
import React, { useState } from 'react';
import '../App.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 200000000) { // 200 MB limit (in bytes)
        alert('File size exceeds the limit of 200 MB.');
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the file name already exists with the same type (for simplicity, assuming no file extension)
    // You can adjust this logic as per your file naming conventions
    const existingFiles = JSON.parse(localStorage.getItem('videoDetails') || '[]');
    if (existingFiles.some((file) => file.name === fileName)) {
      alert('File with the same name already exists.');
      return;
    }

    // Simulate file upload progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);

    // Simulate form submission delay
    setTimeout(() => {
      clearInterval(interval);
      // Save video details to JSON and update progress message
      const newFileDetails = { name: fileName, size: file.size };
      const updatedFiles = [...existingFiles, newFileDetails];
      localStorage.setItem('videoDetails', JSON.stringify(updatedFiles));
      setMessage('File uploaded successfully!');
    }, 5000); // Simulate a 5-second form submission delay
  };

  return (
    <div className="upload">
      <h2>Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/*" />
        {file && <p>Selected File: {fileName}</p>}
        <progress value={progress} max="100" />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;
