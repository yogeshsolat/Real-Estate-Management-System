import { Button } from '@/components/ui/button'
import { useContext, useEffect, useState } from 'react'

import React from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaHeart, FaHome, FaShoppingCart, FaEdit } from 'react-icons';

import { userDet } from '@/data/Data';
import { HeartIcon, HomeIcon, MailIcon, PhoneIcon, PlusIcon, UserIcon } from 'lucide-react';
import { UserContext } from '@/App';
import { Link } from 'react-router-dom';
import { getAllOwners, getAllUsers, blockUser, unblockUser } from '@/services/admin';


const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, owners] = await Promise.all([getAllUsers(), getAllOwners()]);
        const combinedData = [
          ...users.map(user => ({ ...user, role: 'USER' })),
          ...owners.map(owner => ({ ...owner, role: 'OWNER' }))
        ];
        setData(combinedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBlock = async (id) => {
    try {
      await blockUser(id);
      setData(prevData => prevData.map(item => item.id === id ? { ...item, blocked: true } : item));
    } catch (error) {
      setError(error);
    }
  };

  const handleUnblock = async (id) => {
    try {
      await unblockUser(id);
      setData(prevData => prevData.map(item => item.id === id ? { ...item, blocked: false } : item));
    } catch (error) {
      setError(error);
    }
  };


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

  // const { user } = useContext(UserContext)

  


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-slate-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
           <Link to={`/wishlist/${user.id}`}>
           <button
              type="button"
              className="w-full bg-black text-white py-3 rounded-lg shadow-md  hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors flex items-center justify-center space-x-4"
            >
              <HeartIcon className="text-white" />
              <span>View Wishlist</span>
            </button>
           </Link>



            {
              user.role == 'OWNER' &&
              <>
                <Link to={`/ownerprops/${user.id}`}>
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

{user.role === 'ADMIN' && (
            <div className="overflow-x-auto p-2 bg-gray-50 rounded-lg shadow-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead className="bg-gray-200 sticky top-0 shadow-md">
                  <tr>
                    <th className="py-3 px-4 border-b text-left font-bold text-gray-700">First Name</th>
                    <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Last Name</th>
                    <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Email</th>
                    <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Date of Birth</th>
                    <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Role</th>
                    <th className="py-3 px-4 border-b text-center font-bold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                    >
                      <td className="py-3 px-4 border-b text-left text-gray-800">{item.firstName}</td>
                      <td className="py-3 px-4 border-b text-left text-gray-800">{item.lastName}</td>
                      <td className="py-3 px-4 border-b text-left text-gray-800">{item.email}</td>
                      <td className="py-3 px-4 border-b text-left text-gray-800">{item.dob}</td>
                      <td className="py-3 px-4 border-b text-left text-gray-800">{item.role}</td>
                      <td className="py-3 px-4 border-b text-center">
                        {item.blocked ? (
                          <button
                            onClick={() => handleUnblock(item.id)}
                            className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            title="Unblock User"
                          >
                            Unblock
                          </button>
                        ) : (
                          <button
                            onClick={() => handleBlock(item.id)}
                            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            title="Block User"
                          >
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}


          </div>
        </div>
      </div>
    </div>
  )


}

export default UserProfile


// import { Button } from '@/components/ui/button';
// import { useContext, useEffect, useState } from 'react';
// import React from 'react';
// import { HomeIcon, MailIcon, PhoneIcon, PlusIcon, UserIcon,HeartIcon } from 'lucide-react';
// import { UserContext } from '@/App';
// import { Link } from 'react-router-dom';
// import { getAllOwners, getAllUsers, blockUser, unblockUser } from '@/services/admin';

// const UserProfile = () => {
//   const { user } = useContext(UserContext);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [users, owners] = await Promise.all([getAllUsers(), getAllOwners()]);
//         const combinedData = [
//           ...users.map(user => ({ ...user, role: 'USER' })),
//           ...owners.map(owner => ({ ...owner, role: 'OWNER' }))
//         ];
//         setData(combinedData);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleBlock = async (id) => {
//     try {
//       await blockUser(id);
//       setData(prevData => prevData.map(item => item.id === id ? { ...item, blocked: true } : item));
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const handleUnblock = async (id) => {
//     try {
//       await unblockUser(id);
//       setData(prevData => prevData.map(item => item.id === id ? { ...item, blocked: false } : item));
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-300 to-slate-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">User Profile</h2>
//         <div className="space-y-4">
//           {/* User Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <UserIcon className="text-gray-600" />
//               <div>
//                 <label className="block text-gray-600 font-semibold">Name:</label>
//                 <p className="text-xl text-gray-800">{user.firstName} {user.lastName}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <MailIcon className="text-gray-600" />
//               <div>
//                 <label className="block text-gray-600 font-semibold">Email:</label>
//                 <p className="text-xl text-gray-800">{user.email}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <PhoneIcon className="text-gray-600" />
//               <div>
//                 <label className="block text-gray-600 font-semibold">Contact No:</label>
//                 <p className="text-xl text-gray-800">{user.phoneNumber}</p>
//               </div>
//             </div>
//           </div>

       
//           <div className="flex flex-col gap-2 p-3">
//             {user.role === 'OWNER' && (
//               <>

//                   <Link>
//                   <button
//                     type="button"
//                     className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors flex items-center justify-center space-x-4"
//                   >
//                     <HeartIcon className="text-white" />
//                     <span>Wishlist</span>
//                   </button>
//                 </Link>
//                 <Link>
//                   <button
//                     type="button"
//                     className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors flex items-center justify-center space-x-4"
//                   >
//                     <HomeIcon className="text-white" />
//                     <span>View Added Property</span>
//                   </button>
//                 </Link>

//                 <Link to='/addproperty'>
//                   <button
//                     type="button"
//                     className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors flex items-center justify-center space-x-4"
//                   >
//                     <PlusIcon className="text-white" />
//                     <span>Add Property</span>
//                   </button>
//                 </Link>
//               </>
//             )}
//           </div>

//           {user.role === 'ADMIN' && (
//             <div className="overflow-x-auto p-2 bg-gray-50 rounded-lg shadow-lg">
//               <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
//                 <thead className="bg-gray-200 sticky top-0 shadow-md">
//                   <tr>
//                     <th className="py-3 px-4 border-b text-left font-bold text-gray-700">First Name</th>
//                     <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Last Name</th>
//                     <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Email</th>
//                     <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Date of Birth</th>
//                     <th className="py-3 px-4 border-b text-left font-bold text-gray-700">Role</th>
//                     <th className="py-3 px-4 border-b text-center font-bold text-gray-700">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((item, index) => (
//                     <tr
//                       key={item.id}
//                       className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
//                     >
//                       <td className="py-3 px-4 border-b text-left text-gray-800">{item.firstName}</td>
//                       <td className="py-3 px-4 border-b text-left text-gray-800">{item.lastName}</td>
//                       <td className="py-3 px-4 border-b text-left text-gray-800">{item.email}</td>
//                       <td className="py-3 px-4 border-b text-left text-gray-800">{item.dob}</td>
//                       <td className="py-3 px-4 border-b text-left text-gray-800">{item.role}</td>
//                       <td className="py-3 px-4 border-b text-center">
//                         {item.blocked ? (
//                           <button
//                             onClick={() => handleUnblock(item.id)}
//                             className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                             title="Unblock User"
//                           >
//                             Unblock
//                           </button>
//                         ) : (
//                           <button
//                             onClick={() => handleBlock(item.id)}
//                             className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             title="Block User"
//                           >
//                             Block
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;