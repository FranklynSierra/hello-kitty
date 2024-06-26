import React from 'react'
import image from '../images/pngwing.com.png'

export default function Principal() {
  return (
    <div className='principal'>
      <div className='textlogo'>
        <img className='textlogo' alt='hello' src={image}></img>
        <h2>what is hello kitty?</h2>
     <p>Hello Kitty is a brand and fictional character produced by the Japanese company Sanrio and has long been the most popular of this company.</p>
      </div>
  
    </div>
  )
}
