import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownBtn = ({children,dropdownFunc,visible1,visible2,btnName,icon}) => {
  return (
    <>
    <div className='mx-5'>
          <button className={`p-2 hover:bg-souporange-100 hover:text-soupwhite-100 rounded-md hover:cursor-pointer hover:shadow-md ${visible1}`} 
          onClick={dropdownFunc}>
          {btnName} <FontAwesomeIcon icon={icon}/>
          </button>
            <div className={`relative w-full  ${visible2}`}>
              <div className='absolute top-full left-0 mt-2 h-20 w-5xl flex flex-wrap bg-soupwhite-200 shadow-md  z-10 p-2 '>
                {children}
              </div>
                    {/*  */}
            </div>
      </div> 
    </>
  )
}

export default DropdownBtn