import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MidNavigation = () => {
  return (
    <div className='h-1/12 py-2 my-2 bg-souporange-100'><input 
                    type='text' 
                    className='border-soupwhite-100 border-2 rounded-l-lg h-8 max-w-60' 
                    />
                    <button 
                    className='bg-soupwhite-100 h-8 w-8 rounded-r-lg hover:bg-souporange-200 hover:cursor-pointer'>
                            <FontAwesomeIcon  icon={faSearch} className='text-souporange-100'/>
                    </button></div>
  )
}

export default MidNavigation