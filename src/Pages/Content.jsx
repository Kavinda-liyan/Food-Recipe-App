import React, { useState } from 'react'
import MidNavigation from '../Components/Navigation/MidNavigation'
import RecipeContent from '../Components/Recipes/RecipeContent'

const Content = () => {
  const [selectedCuisine,setSelectedCuisine]=useState('indian');
  const [selectedCategory,setSelectedCategory]=useState('Chicken');
  return (
    <div className='h-screen'>
        <MidNavigation oncuisineChange={setSelectedCuisine} onCategoryChange={setSelectedCategory}/>
        <RecipeContent selectedCuisine={selectedCuisine} selectedCategory={selectedCategory}/>
    </div>
  )
}

export default Content