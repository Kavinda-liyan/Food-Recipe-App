import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import MainBanner from '../Components/MainBanner'






const Home = () => {
  return (
    <div className='bg-soupwhite-100 h-screen overflow-hidden'>
        <Navigation/>
        <MainBanner/>
        {/* <RecipeHeader/> */}
        

    </div>
  )
}

export default Home