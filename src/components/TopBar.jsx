import React from 'react'
import { Link } from 'react-scroll'

export default function TopBar() {
  return (

    <div className='sideBar'>

     

        <ul>
          <Link className='sides'
            activeClass="active"
            to="origin"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >origin
            
            </Link> 
            </ul>
              <ul>
            <Link className='sides'
            activeClass="active"
            to="characters"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >characters
            
            </Link> 
            </ul>
            <ul>
            <Link className='sides'
            activeClass="active"
            to="oficialPage"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000} >oficial Page
            
            </Link> 
            </ul>
            <ul>
            <Link className='sides'
            activeClass="active"
            to="family"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >Family
            
            </Link> 
            </ul>
     

      
    
        <img className='logoside' src='https://freepngtransparent.com/wp-content/uploads/2023/03/Hello-Kitty-Png-201.png' alt='logo'></img>
    

    </div>
  )
}
