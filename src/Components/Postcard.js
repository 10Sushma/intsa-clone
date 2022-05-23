import React from 'react'

export default function Postcard(props) {
const {cardDetails}=props
  return (
    
    <div className='card'>
          <div className='top'>
              <div className='left1'>
            <h3 className='top1'>{cardDetails.name}</h3>
            <p  className='top1'>{cardDetails.location}</p>
            </div>

            <div className='right1'>
            <p className='dots'>...</p>
          </div>
        </div>
        <div className='card-middle'>
          <img  className='img1'src={'https://instaclone-10x.herokuapp.com/image/'+cardDetails.PostImage} alt='img' />
        </div>
        <div className='card-bottom'>
          <div className='card-b-top'>  
           <div className='left2'>
           <img className='icons' alt='icon' src='https://e7.pngegg.com/pngimages/507/757/png-clipart-computer-icons-heart-like-button-like-share-comment-love-logo-thumbnail.png' />
           <img className='icons' src='https://w7.pngwing.com/pngs/522/1004/png-transparent-computer-icons-others-angle-rectangle-triangle-thumbnail.png' alt='like'/><br></br>
            <p className='like'>{cardDetails.likes} likes</p>
            </div>
            <div className='right2'>
            <p>{cardDetails.date}</p>
            </div>
        </div>
            <div className='card-discription'>
              <h3>{cardDetails.description}</h3>
            </div>
        </div>
      </div>
  )
}
