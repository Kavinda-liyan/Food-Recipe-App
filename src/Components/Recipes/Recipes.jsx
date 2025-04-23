import React from 'react'


const Recipes = ({CategoryName,CategoryImage,RecipeTumbnail}) => {
  return (
    <div className='grid grid-cols-6 h-1/3 px-2 mx-5' >
          <div className='col-span-2  flex items-center justify-center py-2 '>
            <div className='relative w-full rounded-md overflow-hidden shadow-md'>
              <img src={CategoryImage} alt={CategoryImage} className=' w-full h-45 opacity-90 object-cover'></img>
              <h3 className='font-soupfont absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white drop-shadow-lg'>{CategoryName}</h3>

            </div>
                
                        
                

          </div>
          
          <div className='col-span-4 '>
            <div className='grid grid-cols-4 h-full'>
              <div className='p-2 m-2 bg-orange-300 rounded-lg shadow-md'>
                <div>
                  <img src={RecipeTumbnail} alt={RecipeTumbnail}/>

                </div>
                 
              </div>
              
            </div>

          </div>
    </div>
    
  )
}

export default Recipes