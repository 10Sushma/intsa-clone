import React from 'react'
import { useState,useEffect } from 'react';
import Head from './Head';
import Postcard from './Postcard';

export default function Data() {

  const [items, setItems] = useState([]);
    useEffect(() => {
        
        fetch("https://instaclone-10x.herokuapp.com/post")
          .then(res =>res.json())
          .then((result) => {
            setItems(result.user);
            }
          )
          .catch((e)=>console.log(e))
      }, [])
    console.log(items) 
  return (<>
      <div className='head'>
          <Head/>
      </div>
    <section className='card-section'>
    {items.map((cardDetails)=>(
      <Postcard cardDetails={cardDetails}/>
    ))}
</section>
</>   
  )
  }
