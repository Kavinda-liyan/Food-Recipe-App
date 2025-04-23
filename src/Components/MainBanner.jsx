import React from 'react'
import banner from '../Assets/Banner.jpg'

const MainBanner = () => {
  return (
    <section className=''>
        <div className='grid grid-cols-12 h-96'>
            <div className='col-span-7 h-96 overflow-hidden'>
                <img className='' src={banner}></img>
            </div>
            <div className='col-span-5 h-96 bg-souporange-100 flex items-center justify-center'>
                <h2 className='font-soupfont text-center text-white'>
                    <span className='text-6xl'>Discover the<br></br></span><span className='text-4xl'>
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