import React from 'react'
import img from '../assets/services.jpg'
import i1 from '../assets/h1.png'
import i2 from '../assets/h2.png'
import i3 from '../assets/h3.png'
import i4 from '../assets/h4.png'

import i6 from '../assets/h6.png'

const Services = () => {
  return (
    <>
   <div className='relative h-96 bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h6 className="text-white font-semibold">Services</h6>
        <h2 className='text-white text-4xl font-semibold'>Services -All Services</h2>
     </div>
   </div>
   
          {/* <h1 className=" text-bold">Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards</h1> */}

          <div className='grid sm:grid-cols-5 grid-cols-1 p-5 gap-5 border '>
          <div className='grid place-items-center p-20 h-80 shadow-2xl shadow-grey-300 gap-2 hover:scale-105 rounded-lg ' >
            <img src={i1} alt="" className="h-32" />
            <h1 className="text-xl font-semibold">Family House</h1>
                <p className="text-lg">122 Property</p>
          </div>
          <div className='    grid place-items-center p-20 h-80 shadow-2xl shadow-grey-300 gap-2 hover:scale-105 rounded-lg  ' >
          <img src={i2} alt="" className="h-32" />
          <h1 className="text-xl font-semibold">House & Villa</h1>
                <p className="text-lg">155 Property</p>
          </div>
          <div className='grid place-items-center p-20 h-80 shadow-2xl shadow-grey-300 gap-2 hover:scale-105 rounded-lg ' >
          <img src={i3} alt="" className="h-32" />
          <h1 className="text-xl font-semibold">Apartment</h1>
                <p className="text-lg">300 Property</p>
          </div>
          <div className='grid place-items-center p-20 h-80 shadow-2xl shadow-grey-300 gap-2 hover:scale-105 rounded-lg ' >
          <img src={i4} alt="" className="h-32"/>
          <h1 className="text-xl font-semibold">Office & Studio</h1>
                <p className="text-lg">80 Property</p>
          </div>
          <div className='grid place-items-center p-20 h-80 shadow-2xl shadow-grey-300 gap-2 hover:scale-105 rounded-lg ' >
          <img src={i6} alt="" className="h-32" />
          <h1 className="text-xl font-semibold">Villa & Condo</h1>
                <p className="text-lg ">80 Property</p>
          </div>
         
          </div>
</>
);
};

export default Services
