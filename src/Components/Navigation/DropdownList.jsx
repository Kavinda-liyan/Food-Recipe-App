import React from 'react'

const DropdownList = ({Droplinks,Click}) => {
  return (
    <>
    
                <button onClick={()=>Click(Droplinks)} 
                className=' flex  items-center p-1 text-xs bg-soupwhite-100 m-1 rounded-md text-soupblack-100 shadow-md hover:bg-souporange-100 hover:cursor-pointer hover:text-soupwhite-100 h-fit'>
                {Droplinks}
                </button>
             
    </>
  )
}

export default DropdownList