import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownBtn = ({dropdownFunc,visible1,btnName,icon}) => {
  return (
    <>
    <div className='mx-5'>
          <button className={`p-2 hover:bg-souporange-100 hover:text-soupwhite-100 rounded-md hover:cursor-pointer hover:shadow-md ${visible1}`} 
          onClick={dropdownFunc}>
          {btnName} <FontAwesomeIcon icon={icon}/>
          </button>
            
      </div> 
    </>
  )
}

export default DropdownBtn