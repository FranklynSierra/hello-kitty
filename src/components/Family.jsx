import React from 'react'
import mama from '../images/mama.jpg'
import papa from '../images/papa.webp'
import hermana from '../images/hermana.jpg'
import abuelo from '../images/abuelo.png'
import abuela from '../images/abuela.jpg'



export default function Family() {
  return (
    <div className='familyContainer' id='family'>
    <h1> The family of Hello Kitty</h1> 
    <div className='family'>
       <div>
        <div>
          <h2>Mother</h2>
              <img src={mama}alt='mother'/>
        <h2>mary white</h2>
        </div>
        <div>
        <h2>Dad</h2>
        <img src={papa}alt='Dad'/>
       <h2>George white</h2>
        </div>
        
        <div>
       
        <h2>Sister</h2>
        <img src={hermana}alt='Sister'/>
        <h2>mimmy white</h2>
        </div>
        </div>
        <div>
        <div> 
    <h2>grandfather</h2>
        <img src={abuelo}alt='grandfather'/>
       <h2>anthony white</h2>
        </div>
        <div>
        <h2>grandmother</h2>
        <img src={abuela}alt='grandmother'/>
       <h2>margaret white</h2>
        </div>
        </div>

    </div>
    </div>
  )
}
