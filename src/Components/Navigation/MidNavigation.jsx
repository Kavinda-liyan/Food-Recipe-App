import React, { useEffect, useState } from 'react'
import DropdownNav from './DropdownNav'
import axios from 'axios'
import DropdownBtn from './DropdownBtn';
import { faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MidNavigation = () => {

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


  console.log("Country",country);
  console.log(category);

  return (
    <div className='h-16 p-2 bg-soupwhite-100 shadow-md flex items-center justify-center gap-10 font-soupfont'>
      <div className='flex'>
      <DropdownBtn dropdownFunc={() => setCuisineVisible(prev => {
            const newState=!prev
            if(newState) setCategorieVisible(false);
            return newState;
          })} 
          visible1={cuisinevisible?'text-soupwhite-100 bg-souporange-100' :''} 
          visible2={(cuisinevisible && !categorievisible) ? '' : 'hidden'}
          btnName={"Cuisine"}
          icon={cuisinevisible?faCaretUp:faCaretDown}>
              {country.map((cuisine)=>(
                <DropdownNav key={cuisine.strArea} Droplinks={cuisine.strArea}/>
              ))}
          </DropdownBtn>

          <DropdownBtn dropdownFunc={() => setCategorieVisible(prev => {
            const newState=!prev
            if(newState) setCuisineVisible(false);
            return newState;
          })} 
          visible1={categorievisible?'text-soupwhite-100 bg-souporange-100' :''} 
          visible2={categorievisible && !cuisinevisible ? '' : 'hidden'}
          btnName={"Category"}
          icon={categorievisible?faCaretUp:faCaretDown}>
              {category.map((categorie)=>(
                <DropdownNav key={categorie.idCategory} Droplinks={categorie.strCategory}/>
              ))}
          </DropdownBtn>

      </div>
      <div className='flex'>
        <input type='text' className='w-96  border-soupblack-100 bg-soupblack-100/10 border-2 h-8 rounded-l-md'/>
        <button className='bg-soupblack-100 h-8 w-8 rounded-r-md focus-visible:border-0'><FontAwesomeIcon icon={faSearch} className='text-soupwhite-100'/></button>

      </div>
          
          

    </div>
  )
}

export default MidNavigation