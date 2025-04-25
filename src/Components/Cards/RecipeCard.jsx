import React from 'react'
import test from '../../Assets/IndianFoods.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const RecipeCard = ({imgThumb,titleThumb}) => {
  return (
    <div className=' m-2 font-soupfont shadow-md rounded-md overflow-hidden border-2 border-soupblack-100/20 '>
        <div className=' bg-soupwhite-200 shadow-md  h-36 relative'>
            
            <img src={imgThumb} alt={imgThumb} className='h-full w-full object-cover hover:scale-125 duration-500'></img>
            <div className=' absolute  bottom-0 right-0 w-full '>
                <div className='flex justify-end gap-2 items-center py-2 mx-2'>
                    <button className='bg-souporange-100 px-1 py-1 text-soupwhite-100 rounded-md text-xs shadow-sm text-right h-6'>View Recipe</button>
                    <button className='p-1 h-6 w-6 text-xs bg-souporange-100 rounded-2xl text-soupwhite-100 shadow-sm'><FontAwesomeIcon icon={faHeart} /></button>

                </div>
                <div className='bg-soupblack-100/70 backdrop-blur-xs py-1'>
                    <h3 className='p-1 text-soupwhite-100 text-end mx-2'>{titleThumb}</h3>
                </div>
                

            </div>
            
            
        </div>

    </div>
  )
}

export default RecipeCard