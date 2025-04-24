import React from 'react'
import banner from '../Assets/Banner.jpg'
import Foodvideo from '../Assets/Food.mp4'
import RecipeHeader from './Recipes/RecipeHeader'

const MainBanner = () => {
  return (
    <section className='h-11/12 overflow-hidden'>
        <div className=' h-full relative'>
            <div className='  flex items-center h-full'>
                <video src={Foodvideo} muted loop autoPlay playsInline className=' w-full object-cover h-full'></video>
                <div className=' h-45   w-2/3 top-1/3 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-5 absolute rounded-md shadow-lg bg-soupblack-100/60 backdrop-blur-xs '>
                    <h2 className='font-soupfont text-center  text-white opacity-100'>
                        <span className='text-6xl'>Discover the<br></br></span><span className='text-2xl text-gray-50'>
                            world's finest recipes,
                            gathered in one place.
                        </span> 
                    </h2>
                </div>
                <RecipeHeader className={'absolute'}/>
                
            </div>
            
        </div>
    </section>
  )
}

export default MainBanner