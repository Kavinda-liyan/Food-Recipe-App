import React, { useState } from 'react'
import MidNavigation from '../Components/Navigation/MidNavigation'
import RecipeContent from '../Components/Recipes/RecipeContent'

const Content = () => {
  const [selectedCuisine,setSelectedCuisine]=useState('indian');
  return (
    <div className='h-screen'>
        <MidNavigation oncuisineChange={setSelectedCuisine}/>
        <RecipeContent selectedCuisine={selectedCuisine}/>
    </div>
  )
}

export default Content