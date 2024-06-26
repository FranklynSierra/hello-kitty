import React from 'react'
import kitty from '../images/Hello-Kitty-Png-237.png'
export default function Origin() {
  return (
    <div className='principalOrigin'id='plataforms'>
    <div className='origin'>
     <div className='textorigin'>
      <h2>Origin</h2>
      <p>It was designed by Yuko Shimizu and the first product was launched in Japan in 1974 and in the United States in 1976.2​3​ After the first design made by Shimizu, Yuko Yamaguchi became the official designer of Hello Kitty and has been there for more than twenty years. years designing all kinds of Hello Kitty products, accessories and complements.</p>
      </div>
     
        <img className='originImg' src={kitty} alt='kitty'/>
       
    </div>
    </div>
  )
}
