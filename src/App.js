import React,{ useState} from 'react';
import Upload from './components/Upload'

function App() {
  
  const [fileUrl, setFileUrl] = useState('');
  const [ocrText, setOcrText] = useState('');
  
  // UI status changer
  const [ocrStatus,SetOcrStatus] = useState('idle');
  
  
  let renderStatus;
  
  const setCurrentFile = (uploadedFile) =>{
    setFileUrl(uploadedFile)
  }
  
  const handleOcrChange = (scanned,imgurUrl) =>{
    setOcrText(scanned);
    setFileUrl(imgurUrl);
  }
  
  // handle UI changes depending on scanner status
  const handleStatus = (currentStatus) =>{
    SetOcrStatus(currentStatus)
  }
  
  switch (ocrStatus) {
    case 'idle':
      // code
      renderStatus =  
        <Upload 
          handleOcrChange={handleOcrChange} 
          handleStatus={handleStatus}
        />
      break;
    case 'scanning':
      // code
      renderStatus =  
        <div className="lds-dual-ring"></div>
      break;
    case 'done':
      // code
      renderStatus =  
        <p>{ocrText}</p>
      break;
    
    default:
      renderStatus =  
        <Upload 
          handleOcrChange={handleOcrChange} 
          handleStatus={handleStatus}
        />
  }
  
  
  return (
    <div className="App">
      <div className="scanContainer">
        {renderStatus}
      </div>
    </div>
  );
}

export default App;
