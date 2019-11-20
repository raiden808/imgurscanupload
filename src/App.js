import React,{ useState} from 'react';
import Upload from './components/Upload'

function App() {
  
  const [fileUrl, setFileUrl] = useState('');
  
  return (
    <div className="App">
        <div className="container">
          <Upload />
        </div>
    </div>
  );
}

export default App;
