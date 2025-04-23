import React, { useEffect } from 'react'
import Recipes from '../Components/Recipes/Recipes'
import IndianFoods from '../Assets/IndianFoods.jpg'
import MexicanFoods from '../Assets/MexicanFoods.jpg'
import { RecipeApi } from '../Services/recipeapi'
import axios from 'axios'

const RecipeHeader = () => {

  useEffect(()=>{
    const fetchRecipies=async()=>{
      const response=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian');
      console.log(response.data);
    }
    fetchRecipies();
  },[])
  return (
    <div className=''>
        <Recipes CategoryName={"Indian Recipes"} CategoryImage={IndianFoods} />
        <Recipes CategoryName={"Mexican Recipes"} CategoryImage={MexicanFoods} className=''/>
     

    </div>
  )
}

export default RecipeHeader