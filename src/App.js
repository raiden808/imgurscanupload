import React,{ useState} from 'react';
import Upload from './components/Upload'
import CopyText from './components/CopyText.js'

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
  
  const handleClickReset = () =>{
    SetOcrStatus("idle")
  }
  
  switch (ocrStatus) {
    case 'idle':
      renderStatus =  
        <Upload 
          handleOcrChange={handleOcrChange} 
          handleStatus={handleStatus}
        />
      break;
    case 'scanning':
      renderStatus =  
        <div className="lds-dual-ring"></div>
      break;
    case 'done':
      renderStatus =  
        <React.Fragment>
          <p>{ocrText}</p>
          <CopyText textValue={ocrText} />
          <button 
            className="btn btnScan" 
            onClick={handleClickReset}>
            Scan Again
          </button>
        </React.Fragment>
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
