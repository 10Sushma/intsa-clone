import React from 'react'
import './Head.css'
import { Link} from 'react-router-dom';


export default function Head1() {
  return (
    <div className='head1'>
        <img className='instaicon' src='https://cdn-icons-png.flaticon.com/512/1409/1409946.png' 
        alt='instaicon'/>
        <h1>Instaclone</h1>  
        <Link className='camicon' to="/postview" > 
          <img className='camicon' src='https://cdn-icons-png.flaticon.com/512/25/25694.png' alt='camera-icon'/>
          {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
        </Link>
    </div>
  )
}
