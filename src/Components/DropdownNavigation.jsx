import { faArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const DropdownNavigation = () => {
    const [dropdown,setDropdown]=useState('');
   

  return (
    <div className='bg-soupwhite-100 '>
        <div className='flex'>
            
            <ul className='flex p-2'>
                <li className='py-2 px-2 mx-2 bg-souporange-100 rounded-md shadow-md text-md font-semibold text-soupwhite-100'>
                  <button>Category <FontAwesomeIcon icon={faCaretDown}/></button>
                </li>
                <li className='py-2 px-2 mx-2  bg-souporange-100 rounded-md shadow-md text-md font-semibold text-soupwhite-100'>
                  <button>Cuisine <FontAwesomeIcon icon={faCaretDown}/></button>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default DropdownNavigation