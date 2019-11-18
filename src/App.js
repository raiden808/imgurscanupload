import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="scanContainer">
          <h2>Text Scanner</h2>
          <p>Scans your image for text.</p>
          <div className="upload-btn-wrapper">
            <button className="btn">Upload a file</button>
            <input type="file" name="myfile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
