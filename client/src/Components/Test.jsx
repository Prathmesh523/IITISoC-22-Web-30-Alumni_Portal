import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function Test() {
    const [message, setMessage] = useState('')
  
    const handleQuillChange = (value) => {
      setMessage(value)
    }
    return (
        <div style={{height: "500px", width: "500px"}}>
        <div className = "container__composeMail">
            <ReactQuill
              id = "message"
              value = {message}
              onChange = {handleQuillChange}
              className = "quill" 
              placeholder = "Enter Content from here..."
            />
          </div>
        </div>
    );
}

export default Test;