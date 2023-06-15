import React, { useState } from 'react';
//import XLSX from 'xlsx';
import MainPane from './Components/MainPane.js';

const App = () => {
  const [message] = useState('Main page unchanged');

  /*
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setJsonData(json);
    };

    reader.readAsArrayBuffer(file);
  };
  */

  return (
    <MainPane message={message} />
  );
};

export default App;