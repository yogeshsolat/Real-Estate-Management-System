import { Button } from '@/components/ui/button'
import { useContext, useEffect, useState } from 'react'

import React from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaHeart, FaHome, FaShoppingCart, FaEdit } from 'react-icons';

import { userDet } from '@/data/Data';
import { HeartIcon, HomeIcon, MailIcon, PhoneIcon, PlusIcon, UserIcon } from 'lucide-react';
import { UserContext } from '@/App';
import { Link } from 'react-router-dom';



const UserProfile = () => {

  // let [diceValue,setDiceValue] = useState(0); //  const - > reason -> rerender

  // useEffect(()=>{
  //   if(diceValue==7){
  //     alert("you won!");
  //   }
  // },[diceValue])

  // const handleClick=()=>{
  //   const val = Math.floor(Math.random()*10);
  //   setDiceValue(val);
  // }

  // return (
  //   <div className='h-5/6 bg-yellow-50 grid place-items-center gap-4'>
  //     <div className='p-4 shadow-xl shadow-lime-400 '>
  //       {diceValue}
  //     </div>
  //     <Button onClick={handleClick}>Roll dice</Button>

  //   </div>
  // )

  const { user } = useContext(UserContext)


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">User Profile</h2>

        <div className="space-y-6">
          {/* User Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <UserIcon className="text-gray-600" />
              <div>
                <label className="block text-gray-600 font-semibold">Name:</label>
                <p className="text-xl text-gray-800">{user.firstName} {user.lastName}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MailIcon className="text-gray-600" />
              <div>
                <label className="block text-gray-600 font-semibold">Email:</label>
                <p className="text-xl text-gray-800">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="text-gray-600" />
              <div>
                <label className="block text-gray-600 font-semibold">Contact No:</label>
                <p className="text-xl text-gray-800">{user.phoneNumber}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex  flex-col gap-2 p-3">
            <button
              type="button"
              className="w-full bg-black text-white py-3 rounded-lg shadow-md  hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors flex items-center justify-center space-x-4"
            >
              <HeartIcon className="text-white" />
              <span>View Wishlist</span>
            </button>



            {
              user.role == 'OWNER' &&
              <>
                <Link>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors flex items-center justify-center space-x-4"
                  >
                    <HomeIcon className="text-white" />
                    <span>View Added Property</span>
                  </button>
                </Link>

                <Link to='/addproperty'>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors flex items-center justify-center space-x-4"
                  >
                    <PlusIcon className="text-white" />
                    <span>Add Property</span>
                  </button>
                </Link>

              </>
            }


          </div>
        </div>
      </div>
    </div>
  )


}

export default UserProfile
