import React from 'react'
import img from '../assets/pricing.jpg'
import ContactCard from '@/components/custom/ContactCard';
const Contact = () => {
  return (
    <>
   <div className='relative h-96 bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h6 className="text-white font-semibold">Contact Us</h6>
        <h2 className='text-white text-4xl font-semibold'>Get Helps & Friendly Support</h2>
     </div>
   </div>
   <ContactCard/>
</>
);
};

export default Contact
