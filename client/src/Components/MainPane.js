import React, {useState} from 'react';
import MainPaneContext from './MainPaneContext';
//import FileUploader from './FileUploader.js';
import Test from './Test.js';

const MainPane = () => {
    const [message, setMessage] = useState('unchanged');

    return(
        <MainPaneContext.Provider value={[message, setMessage]}>
            <div>
                State: {message}
                <Test message={message} />
            </div>
        </MainPaneContext.Provider>
        //<FileUploader message={message} />
    );
};

export default MainPane;

/*
<div>
    
    <h1>Excel to JSON Converter</h1>
    <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    {jsonData && (
    <div>
      <h2>Converted JSON:</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  )}
</div>
*/