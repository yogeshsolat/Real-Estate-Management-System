import { UserContext } from '@/App'
import PropertyCard from '@/components/custom/PropertyCard'
import Sidebar from '@/components/custom/Sidebar'

import { PropDet } from '@/data/Data'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





const Properties = () => {

  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const [city, setCity] = useState(undefined);
  const [category, setCategory] = useState(undefined);

  if(user==null){
    return(
      <div className='flex justify-center items-center flex-col h-96'>
        <h1 className='text-xl font-bold '>Please login first</h1>
        <Link to='/signin' className='hover:underline hover:text-blue-400'>Signin here</Link>
      </div>
    )
  }

  return (
    <div className='flex '>
      <Sidebar city= {city} setCity={setCity}  setCategory={setCategory} />
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 flex-1'>
     {
      PropDet.map((property)=>( 
          
         ( (property.city == city || city == undefined) && (property.category == category || category == undefined) )&& <div className='sm:p-4'><PropertyCard Property={property}/></div>
        
      ))

     }

{/* {
      PropDet.map((property)=>( 
          
          (property.category == category || category == undefined) && <div className='sm:p-4'><PropertyCard Property={property}/></div>
        
      ))

     } */}
    </div>
   
    </div>

  )
}

export default Properties
