import React from 'react'
import mama from '../images/mama.jpg'

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
        <img src='data:image/png;base64,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'alt='Dad'/>
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