import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
import axios from 'axios'

const RecipeHeader = () => {

  const [cuisine,setcuisine]=useState([]);

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
      const americanData=await fetchRecipies('american');
      const fullCuisine=[...indianData,...mexicanData,...americanData];
      if(fullCuisine.length){
        setcuisine(fullCuisine);
      }
    }
    

    fetchAllRecipe();
  },[])
  

  
  return (
    
    <div className='absolute bottom-20 transform '>
      
        <Recipes   >
          
                {cuisine.map((recipe)=>(
                  <img className='p-2 rounded-xl shadow-md' key={recipe.idMeal} src={recipe.strMealThumb} alt={recipe.strMealThumb}/>
                ))}
               
        </Recipes>
        
      
       
    </div>
  )
}

export default RecipeHeader