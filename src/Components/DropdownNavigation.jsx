import React, { useState } from 'react'

const DropdownNavigation = () => {
    const [dropdown,setDropdown]=useState('');

  return (
    <div className='bg-souporange-100 h-16 z-0'>
        <div>
            <button>Category</button>
            <ul>
                <li>Cabege</li>
                <li>Water</li>
            </ul>
        </div>
        
    </div>
  )
}

export default DropdownNavigation