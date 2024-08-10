import React from 'react'

import img from '../../../assets/about.jpg'


import img2 from '../../../assets/immio.jpg'

const About = () => {
  return (
    <>
    
<div className='relative h-96 bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h6 className="text-white font-semibold">About Us</h6>
        <h2 className='text-white text-4xl font-semibold'>About Us - Who we Are?</h2>
      </div>
  </div>

      <div className='grid sm:grid-cols-2 grid-cols-1 shrink-0 p-10'>
        <div className=' p-16'>
          <h1 className='text-4xl  text-gray-900 font-semibold '>Our Agency Story</h1>
          <p className='text-slate-500'>Check out our company story and work process</p>
         <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>

        <img src={img2} alt="" className='w-4/5' />
      </div>

    </>
  )
}

export default About
