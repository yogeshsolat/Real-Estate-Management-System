
import AddressIcon from '@/icons/AddressIcon';
import { EarthIcon, EarthLockIcon, GlobeIcon, GlobeLock, MailIcon, MessageSquare, PhoneCallIcon } from 'lucide-react';
import React from 'react';

function ContactCard() {
  return (
    <div className="bg-gray-300 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 justify-center">CONTACT US</h2>
      <div className="flex flex-col space-y-4 mt-4 ">
        <div className="  flex  gap-3 ">
        <PhoneCallIcon/>  <p className="text-xl "> +917083004838 </p>  
        </div>
        <div className=" flex  gap-3 ">
        <GlobeIcon/><p className="text-xl ">www.shelterseek.com</p> 
        </div>
        <div className=" flex  gap-3 ">
        <MailIcon/><p className="text-xl ">supportshelterseek@gmail.com</p>  
        </div>
        <div className=" flex  gap-3 ">
        <AddressIcon/><p className="text-xl ">ShelterSeek head office, Arundhati Complex, Hinjewadi phase-2, bodakewadi </p>  
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

