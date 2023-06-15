import React, { useState } from 'react';

const UploadResults = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;

        // Process the file content here
        // For example: console.log(fileContent);
        console.log(fileContent);

        // Clear the selected file
        setSelectedFile(null);
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default UploadResults;