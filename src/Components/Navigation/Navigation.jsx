import React, { useState } from 'react'
import Logo from '../../Assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavWrapper from './NavWrapper'
import Navlinks from './Navlinks'


const Navigation = () => {
    const [inputSearch,setInputSearch]=useState('');
    const [theme,setTheme]=useState('Light');

    const searchItems=(event)=>{
        setInputSearch(event.target.value);
        console.log(inputSearch);
    }

    
    const changeTheme=()=>{
        setTheme('Dark');
    }
  return (
    <div className='p-2  z-10 min-h-1/12'>
        <div className='flex justify-between items-center'>
            {/* Dropdown and Logo */}
            
            <NavWrapper>
                <img src={Logo} 
                alt='Recipe for you Logo' 
                className='h-12 '/>

            </NavWrapper>
                

            {/* SearchBar */}
            <NavWrapper>
                <ul className='flex gap-10 font-soupfont text-lg items-center'>
                    <Navlinks Nav={"Home"}/>
                    <Navlinks Nav={"Recipes"}/>
                    <Navlinks Nav={"About us"}/>
                    <Navlinks Nav={"Contact us"}/>
                    
                </ul>

            </NavWrapper>

          
            

            

            {/* ModController */}
            <NavWrapper>
                <button className='h-6 border-2 w-12 border-souporange-100 rounded-2xl flex items-center hover:cursor-pointer' onClick={changeTheme}>
                        <div className='h-4 w-4 bg-souporange-100 m-1 rounded-4xl'></div>
                </button>

            </NavWrapper>
                    
                
        </div>

    </div>
  )
}

export default Navigation