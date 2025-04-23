import React from 'react'
import banner from '../Assets/Banner.jpg'

const MainBanner = () => {
  return (
    <section className='h-11/12 px-2 mx-5'>
        <div className='grid grid-cols-12 h-96'>
            <div className='col-span-7 h-96 overflow-hidden'>
                <img className='w-full h-full' src={banner}></img>
            </div>
            <div className='col-span-5 h-96 bg-souporange-100 flex items-center justify-center p-5'>
                <h2 className='font-soupfont ml-5 pl-5 text-white '>
                    <span className='text-6xl'>Discover the<br></br></span><span className='text-4xl text-gray-50'>
                    world's finest recipes,
                gathered in one place.
                    </span> 
                </h2>
            </div>
        </div>
    </section>
  )
}

export default MainBanner