import React, { useEffect, useState } from 'react'
import RecipeCard from '../Cards/RecipeCard'
import axios from 'axios';

const RecipeContent = ({selectedCuisine}) => {
    const [recipecuisie,setRecipecuisine]=useState([]);
    useEffect(()=>{
        const getByCuisine=async()=>{
            try{
                const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCuisine}`);
                if(response.data.meals&&response.data.meals.length){
                    setRecipecuisine(response.data.meals);
                }
                else{
                    setRecipecuisine([]);
                }   
            }
            catch(error){
                console.error("Data fetchinng incomplete",error);
                setRecipecuisine([]);
            }
            
            
            
        }
        if (selectedCuisine) getByCuisine();
    },[selectedCuisine]);
    
  return (
    <section className=' h-11/12'>
        <div className='grid grid-cols-4 gap-5 mx-10 py-5'>
            {recipecuisie.map((recipe)=>(
                <RecipeCard key={recipe.idMeal} titleThumb={recipe.strMeal} imgThumb={recipe.strMealThumb}/>
            ))}
            
            
        </div>
    </section>
  )
}

export default RecipeContent