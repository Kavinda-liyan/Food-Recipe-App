import React, { useEffect, useState } from 'react'
import Recipes from '../Components/Recipes/Recipes'
import IndianFoods from '../Assets/IndianFoods.jpg'
import MexicanFoods from '../Assets/MexicanFoods.jpg'
import { RecipeApi } from '../Services/recipeapi'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const RecipeHeader = () => {

  const [indianRecipe,setIndianRecipe]=useState([]);
  const [mexicanRecipe,setMexicanRecipe]=useState([]);
  const fetchRecipies=async(cuisine)=>{
    try{  
        const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`);
        if(response.data.meals&&response.data.meals.length){
          return response.data.meals;
        }
        return[];
        
    }
    catch(error){
      console.error('Data fetching Error',error);
    }
  }

  useEffect(()=>{
    const fetchAllRecipe=async()=>{
      const indianData=await fetchRecipies('Indian');
      const mexicanData=await fetchRecipies('Mexican');
      if(indianData.length){
        
        setIndianRecipe(indianData);
          
      }
      if(mexicanData.length){
        setMexicanRecipe(mexicanData);
      }
      
    }

    fetchAllRecipe();
  },[])
  

  
  return (
    
    <div className=''>
      
        <Recipes  CategoryName={"Indian Recipes"} CategoryImage={IndianFoods}  >
          
                {indianRecipe.map((recipe)=>(
                  <img className='p-2 ' key={recipe.idMeal} src={recipe.strMealThumb} alt={recipe.strMealThumb}/>
                ))}
               
        </Recipes>
        <Recipes  CategoryName={"Mexican Recipes"} CategoryImage={MexicanFoods}  >
          
                {mexicanRecipe.map((recipe)=>(
                  <img className='p-2 ' key={recipe.idMeal} src={recipe.strMealThumb} alt={recipe.strMealThumb}/>
                ))}
               
        </Recipes>
      
       
    </div>
  )
}

export default RecipeHeader