import React,{ useState} from 'react'
import axios from 'axios'
import { Tesseract } from "tesseract.ts";

const Upload = ({handleOcrChange,handleStatus}) =>{
    
    // set this to global, move to app js
    // create an onclick that will affect app js.
    const [toUpload,setUpload] = useState();
    
    const onChangeHandler = (e) =>{
        // file object data
        processUpload(e.target.files[0]);
    }
    
    const processUpload = (fileObject) =>{
        
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = process.env.REACT_APP_IMGUR_API;
        
        const data = new FormData()
        data.append('image',fileObject)
            
        axios.post(apiUrl, data, {
            headers: {
                'Authorization': 'Client-ID ' + apiKey,
                'content-type': 'multipart/form-data'
            }
        }).then(res => { // then print response status
	            console.log(res)
	            console.log("Image Link: ",res.data.data.link)
	            setUpload(res.data.data.link)
	            
	            //App statuses
	            tesseractScan(res.data.data.link)
	            handleStatus("scanning");
            }
        )
    } 
    
    const tesseractScan = (imgurUrl) =>{
        //Tessaract Upload : Working
        Tesseract.recognize(imgurUrl)
      	.progress(progress => {
        	console.log('progress', progress);
        	
      	}).then(result => {
	      console.log('result', result);
	      Tesseract.terminate();

	      console.log(result.text);
	      
	      //App statuses
	      handleOcrChange(result.text,imgurUrl)
	      handleStatus("done");
    	});
    }
    
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}


export default Upload