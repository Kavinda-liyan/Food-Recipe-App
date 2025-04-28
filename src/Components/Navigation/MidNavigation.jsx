import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DropdownBtn from './DropdownBtn';
import { faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownList from './DropdownList';
const MidNavigation = ({oncuisineChange,onCategoryChange}) => {

  const [country,setCountry]=useState([]);
  const [category,setCategory]=useState([]);
  const [cuisinevisible,setCuisineVisible]=useState(false);
  const [categorievisible,setCategorieVisible]=useState(false);

  useEffect(()=>{
    const getData=async(link)=>{
      try{
        const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/${link}`);
        if(response.data.meals&&response.data.meals.length){
          return response.data.meals
        }
       else if(response.data.categories&&response.data.categories){
        return response.data.categories
       }
       else{
        return[];
       }

       
      }
      catch(error){
        console.error('Data not Fetching',error);
        return[];
      }
    }
    const fetchAll=async()=>{
      const countries=await getData('list.php?a=list');
      const categories=await getData('categories.php');

      setCountry(countries);
      setCategory(categories);
      
    };

    fetchAll();

  },[]);


  return (
    <section>
       <div className='h-1/12 p-2 bg-soupwhite-100 shadow-md flex items-center justify-center gap-10 font-soupfont'>
      <div className='flex'>
      <DropdownBtn dropdownFunc={() => setCuisineVisible(prev => {
            const newState=!prev
            if(newState) setCategorieVisible(false);
            return newState;
          })} 
          visible1={cuisinevisible?'text-soupwhite-100 bg-souporange-100' :''} 
          btnName={"Cuisine"}
          icon={cuisinevisible?faCaretUp:faCaretDown}>
             
          </DropdownBtn>

          {/* <DropdownBtn dropdownFunc={() => setCategorieVisible(prev => {
            const newState=!prev
            if(newState) setCuisineVisible(false);
            return newState;
          })} 
          visible1={categorievisible?'text-soupwhite-100 bg-souporange-100' :''} 
          btnName={"Category"}
          icon={categorievisible?faCaretUp:faCaretDown}>
             
          </DropdownBtn> */}

      </div>
      <div className='flex'>
        <input type='text' className='w-44  border-soupblack-100 bg-soupblack-100/10 border-2 h-8 rounded-l-md'/>
        <button className='bg-soupblack-100 h-8 w-8 rounded-r-md focus-visible:border-0'><FontAwesomeIcon icon={faSearch} className='text-soupwhite-100'/></button>

      </div>
          
    </div>
    <div className={` shadow-md flex items-center justify-center gap-10 font-soupfont z-10 absolute`}>
      <div className={'relative w-full '} >
      {cuisinevisible && !categorievisible && (
        <div className='bg-soupwhite-200 shadow-md p-2 px-5 flex flex-wrap'>
          {country.map((cuisine) => (
            <DropdownList key={cuisine.strArea} Droplinks={cuisine.strArea} Click={()=>oncuisineChange(cuisine.strArea)} />
          ))}
        </div>
      )}

{categorievisible && !cuisinevisible && (
  <div className='bg-soupwhite-200 shadow-md p-2 px-5 flex flex-wrap'>
    {category.map((category) => (
      <DropdownList key={category.idCategory} Droplinks={category.strCategory} Click={()=>onCategoryChange(category.strCategory)} />
    ))}
  </div>
)}
      </div>
                    {/*  */}
    </div>

    </section>
    
   
    
  )
}

export default MidNavigation