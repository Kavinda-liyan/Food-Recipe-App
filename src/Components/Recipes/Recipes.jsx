import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons'


const Recipes = ({CategoryName,CategoryImage,RecipeTumbnail,children}) => {
  const scrollerRef=useRef(null);
    const imageWidth=500;

    

    const handleNext=()=>{
      if(scrollerRef.current){
        scrollerRef.current.scrollLeft+=imageWidth;
      }
    }

    const handlePrev=()=>{
      if(scrollerRef.current){
        scrollerRef.current.scrollLeft-=imageWidth;
      }
    }
  
  return (
    <div className='grid grid-cols-6 h-1/3 ' >
          <div className='col-span-3  flex items-center justify-center py-2 '>
            <div className='relative w-full rounded-md overflow-hidden shadow-md'>
              <img src={CategoryImage} alt={CategoryImage} className=' w-full h-25 opacity-90 object-cover'></img>
              <h3 className='font-soupfont absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white drop-shadow-lg'>{CategoryName}</h3>

            </div>
          </div>
          
          <div className='col-span-3 '>
            
            <div className='grid h-full'>
              
                          <div className=' p-1 rounded-lg flex items-center'>
                           
                           <button className={`h-8 w-8  z-10 rounded-lg text-white hover:cursor-pointer m-1 bg-souporange-100`} onClick={handlePrev}><FontAwesomeIcon icon={faCaretLeft}/></button>
                            
                              <div className='flex overflow-hidden h-25 w-full scroll-smooth ' ref={scrollerRef}>
                                  {children}
                              </div>
                            <button className=' h-8 w-8 bg-souporange-100  z-10 rounded-lg text-white hover:cursor-pointer m-1' onClick={handleNext}><FontAwesomeIcon icon={faCaretRight}/></button>

                           
                            
                             
                          </div>
                          
                        </div>
          </div>
    </div>
    
  )
}

export default Recipes