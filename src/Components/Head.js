import React from 'react'
import './Head.css'
import { Link} from 'react-router-dom';


export default function Head() {
  return (
    <div className='head1'>
        <img className='instaicon' src='https://cdn-icons-png.flaticon.com/512/1409/1409946.png' 
        alt='instaicon'/>
        <h1>Instaclone</h1>  
        <Link className='camicon' to="/form" > 
          <img className='camicon' src='https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png' alt='camera-icon'/>
        </Link>
    </div>
  )
}
