import React from 'react'

const NavWrapper = ({children}) => {
  return (
    <div className='flex mx-5'>
        <div className='mx-2'>
            {children}
            
        </div>
    </div>
  )
}

export default NavWrapper