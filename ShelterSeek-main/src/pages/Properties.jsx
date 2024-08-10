import PropertyCard from '@/components/custom/PropertyCard'
import Sidebar from '@/components/custom/Sidebar'

import { PropDet } from '@/data/Data'
import React, { useState } from 'react'





const Properties = () => {
  const [city, setCity] = useState(undefined);

  return (
    <div className='flex '>
      <Sidebar city= {city} setCity={setCity}/>
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 flex-1'>
     {
      PropDet.map((property)=>( 
          
          (property.city == city || city == undefined) && <div className='sm:p-4'><PropertyCard Property={property}/></div>
        
      ))
     }
    </div>
   
    </div>

  )
}

export default Properties
