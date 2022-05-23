import React, { useState } from 'react';
import moment from 'moment'
import Head1 from './Head1'


import './Form.css'
import {useNavigate} from 'react-router-dom';


function Form() {
  const[file,setFile]=useState('')
  const [name,setAuthor]=useState('')
  const[location,setLocation]=useState('')
 const[description,setDescription]=useState('')

 const navigate = useNavigate();
  const imageUpload=(event)=>{
    // console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  
  async function userspost(event){
    event.preventDefault()
    const date = moment(new Date()).format("DD/MM/YYYY")
    const formData=new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    
    formData.append("PostImage", file);
    formData.append("date", date);
  
     fetch('https://instaclone-10x.herokuapp.com/posts',{
      method:'POST',
      headers:{ },
      body: formData,
      
    })
   
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(alert("Post created successfully"))
    .then(navigate('/Postview'))
  
  }
  

  return (
    
    <div className='div1'>
      <Head1 />
      <div className='main'>
        
        <form onSubmit={userspost} encType='multipart/form-data' action='/postview'>

                  <input type="file" id='file' name='PostImage' 
                  onChange={imageUpload}class='inp' placeholder='No file chosen' required/>
           <div className='middle'>
                  <input type="text" id='author'  value={name}
                  onChange={(e)=>setAuthor(e.target.value)} class='inp' placeholder='Author' required/>
                  <input  type="text" id='location'  value={location}
                   onChange={(e)=>setLocation(e.target.value)} class='inp' placeholder='Location' required/>
            </div>  
                  <input type="text" id='description'  value={description}
                  onChange={(e)=>setDescription(e.target.value)} class='inp' placeholder='Description' required/><br></br><br></br>
            
            
              <button type='submit' id='btn1'>  Post</button>
              {/* <button id='btn1'><Link to='/Homepage'>  Post</Link></button> */}
            {/*  */}
        </form>
      </div>
    </div>
  )
}

export default Form