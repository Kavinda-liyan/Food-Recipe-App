import React, { useEffect, useState } from 'react'
import RecipeCard from '../Cards/RecipeCard'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

const RecipeContent = ({selectedCuisine}) => {
    const [recipecuisie,setRecipecuisine]=useState([]);
    const [curruntPage,setCurruntPage]=useState(1);
    const itemsPerPage=8;

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

    const totalPages=Math.ceil(recipecuisie.length/itemsPerPage);
    const indexofFirstItem=(curruntPage-1)*itemsPerPage;
    const indexOfLastItem=indexofFirstItem+itemsPerPage;
    const curruntRecipes=recipecuisie.slice(indexofFirstItem,indexOfLastItem);

    const handlePrev=()=>{
        if(curruntPage>1)setCurruntPage(prev=>prev-1);
    }
    const handleNext=()=>{
        if(curruntPage<totalPages)setCurruntPage(prev=>prev+1);
    }


    
  return (
    <section className=' h-11/12 relative'>
        
        <div className='grid grid-cols-4 gap-5 mx-10 py-10'>
            
            {curruntRecipes.map((recipe)=>(
                <RecipeCard key={recipe.idMeal} titleThumb={recipe.strMeal} imgThumb={recipe.strMealThumb}/>
            ))}        
        </div>
        <div className=' absolute bottom-5 left-1/2 transform -translate-x-1/2'>
        <div className=' flex justify-center gap-20 text-2xl '>
        
            
                <button className={`p-1 w-10 h-10 rounded-md shadow-md ${curruntPage === 1 ? 'bg-souporange-100/60 text-soupwhite-100 cursor-not-allowed' : 'bg-souporange-100 text-soupwhite-100 cursor-pointer'}`}
                 onClick={handlePrev}
                 disabled={curruntPage===1}
                ><FontAwesomeIcon icon={faCaretLeft}/></button>
                <button className={`p-1 w-10 h-10 rounded-md shadow-md ${curruntPage === totalPages ? 'bg-souporange-100/60 text-soupwhite-100 cursor-not-allowed' : 'bg-souporange-100 text-soupwhite-100 cursor-pointer'}` }
                onClick={handleNext}
                ><FontAwesomeIcon icon={faCaretRight}/></button>
        </div>

        </div>
        


        
    </section>
  )
}

export default RecipeContent