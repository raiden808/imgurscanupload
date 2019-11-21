import React,{ useState} from 'react'
import axios from 'axios'

const Upload = () =>{
    
    const [toUpload,setUpload] = useState();
    
    const onChangeHandler = (e) =>{
        // file object data
        
        console.log(e.target.files)
        
        setUpload(e.target.files);
        
        console.log("axios triggered")
        
       
        
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = '41491dab8a7c338';
        
        const data = new FormData()
        data.append('image',e.target.files[0])
            
        axios.post(apiUrl, data, {
            headers: {
                'Authorization': 'Client-ID ' + apiKey,
                'content-type': 'multipart/form-data'
            }
        }).then(res => { // then print response status
	            console.log(res)
            }
        )
    }
    
    
    //todo - set up api upload for imgur
    const processUpload = (fileObject) =>{
        
        console.log("File Data: ",fileObject)
        
        // const data = new FormData()
        // var apiUrl = 'https://api.imgur.com/3/image';
        // var apiKey = '41491dab8a7c338';
        
        // data.append('file',fileObject)
            
        // axios.post(apiUrl, data, {
        //     headers: {
        //         'authorization': 'Client-ID ' + apiKey,
        //         'content-type': 'multipart/form-data'
        //     }
        // }).then(res => { // then print response status
	       //     console.log(res)
        //     }
        // )
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