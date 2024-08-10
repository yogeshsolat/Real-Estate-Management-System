// import React from 'react';

// function ContactCard() {
//   return (
//     <div className="bg-blue-100 p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-blue-700">CONTACT US</h2>
//       <div className="flex flex-col space-y-4 mt-4">
//         <div className="flex items-center">
//           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012 2v14a2 2 0 002 2h14a2 2 0 01-2 2h-7a2 2 0 01-2-2v-7a2 2 0 012-2h7a2 2 0 002-2V5a2 2 0 01-2-2H5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l3-3m0 0l3 3m-3-3v-6"></path></svg>
//           <p className="ml-2">9766211228</p>
//         </div>
//         <div className="flex items-center">
//           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7 7 7-7m-7 7v10m-5-10v5m5-5h10"></path></svg>
//           <p className="ml-2">www.apnaghar.com</p>
//         </div>
//         <div className="flex items-center">
//           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7 7L16 8"></path></svg>
//           <p className="ml-2">apnaghar@gmail.com</p>
//         </div>
//         <div className="flex items-center">
//           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12m0 0l4.243-4.243M13.414 12l-4.243 4.243m0 0l4.243-4.243"></path></svg>
//           <p className="ml-2"> Any City</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactCard;
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

