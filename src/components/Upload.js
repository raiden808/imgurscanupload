import React from 'react'

const Upload = () =>{
    
    const onChangeHandler = (e) =>{
        // file object data
        console.log(e.target.files[0])
    }
    
    const processUpload = (e) =>{
        
    } 
    
    return (
        <div className="scanContainer">
            <h2>Text Scanner</h2>
            <p>Scans your image for text.</p>
            <div className="upload-btn-wrapper">
                <button className="btn">Upload a file</button>
                <input 
                    type="file" 
                    name="myfile" 
                    onChange={(e) =>onChangeHandler(e)}
                />
            </div>    
        </div>
    )
}


export default Upload