import React from 'react'
import logo from '../images/hellokittycorazon.png'
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
     

      
    
        <img className='logoside' src={logo} alt='logo'></img>
    

    </div>
  )
}
