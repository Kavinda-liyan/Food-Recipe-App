import React, { useState } from 'react'
import Logo from '../../Assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavWrapper from './NavWrapper'


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
    <div className='p-2  z-10 h-1/12'>
        <div className='flex justify-between items-center'>
            {/* Dropdown and Logo */}
            
            <NavWrapper>
                <img src={Logo} 
                alt='Recipe for you Logo' 
                className='h-12 mx-2'/>

            </NavWrapper>
                

            {/* SearchBar */}
            <NavWrapper>
                <input value={inputSearch} 
                type='text' 
                className='border-souporange-100 border-2 rounded-l-lg h-8 max-w-60' 
                onChange={searchItems}/>
                <button 
                className='bg-souporange-100 h-8 w-8 rounded-r-lg hover:bg-souporange-200 hover:cursor-pointer'>
                        <FontAwesomeIcon  icon={faSearch} className='text-soupwhite-100'/>
                </button>

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