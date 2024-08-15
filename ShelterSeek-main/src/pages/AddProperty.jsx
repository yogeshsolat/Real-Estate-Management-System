

import { UserContext } from '@/App';
import { addProperty } from '@/services/property';
// import React, { useState } from 'react';

// const AddProperty = () => {
//   const [property, setProperty] = useState({
//     propType: '',
//     propSize: 0,
//     title: '',
//     price: 0,
//     flatType: '',
//     bathrooms: 0,
//     isfurnished: false,
//     balcony: 0,
//     rent: 0,
//     deposit: 0,
//     category: 'SELL',
//     file: null,
//     propAddress: {
//       adrLine1: '',
//       adrLine2: '',
//       city: '',
//       state: '',
//       country: '',
//       zipCode: '',
//     },
//     parking: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'file') {
//       setProperty({ ...property, file: files[0] });
//     } else if (['adrLine1', 'adrLine2', 'city', 'state', 'country', 'zipCode'].includes(name)) {
//       setProperty({
//         ...property,
//         propAddress: { ...property.propAddress, [name]: value },
//       });
//     } else if (name === 'isfurnished' || name === 'parking') {
//       setProperty({ ...property, [name]: e.target.checked });
//     } else {
//       setProperty({ ...property, [name]: value });
//     }
//   };

//   const handleRadioChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({ ...property, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(property);
//     // Handle form submission
//     const result = await addProperty(property)
//     if (result['status'] >=200 || result['status'] <300) {
//       toast.success('successfully added')
//       navigate('/properties')
//     } else {
//       toast.error('Failed to register the user')
//     }

//     console.log(result)


//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-3xl font-extrabold mb-8 text-gray-900 sm:flex justify-center">ADD PROPERTY</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Property Type</label>
//               <input
//                 type="text"
//                 name="propType"
//                 value={property.propType}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Property Size (sq ft)</label>
//               <input
//                 type="number"
//                 name="propSize"
//                 value={property.propSize}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={property.title}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={property.price}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Flat Type</label>
//               <input
//                 type="text"
//                 name="flatType"
//                 value={property.flatType}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Bathrooms</label>
//               <input
//                 type="number"
//                 name="bathrooms"
//                 value={property.bathrooms}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Furnished</label>
//               <input
//                 type="checkbox"
//                 name="isfurnished"
//                 checked={property.isfurnished}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Balcony</label>
//               <input
//                 type="number"
//                 name="balcony"
//                 value={property.balcony}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Rent</label>
//               <input
//                 type="number"
//                 name="rent"
//                 value={property.rent}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Deposit</label>
//               <input
//                 type="number"
//                 name="deposit"
//                 value={property.deposit}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Parking</label>
//               <input
//                 type="checkbox"
//                 name="parking"
//                 checked={property.parking}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 font-medium">Address Line 1</label>
//               <input
//                 type="text"
//                 name="adrLine1"
//                 value={property.propAddress.adrLine1}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 font-medium">Address Line 2</label>
//               <input
//                 type="text"
//                 name="adrLine2"
//                 value={property.propAddress.adrLine2}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={property.propAddress.city}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">State</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={property.propAddress.state}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Country</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={property.propAddress.country}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-1">
//               <label className="block text-gray-700 font-medium">Zip Code</label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={property.propAddress.zipCode}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 font-medium">Image</label>
//               <input
//                 type="file"
//                 name="file"
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm hover: focus:outline-none"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProperty;


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProperty = () => {
  const [property, setProperty] = useState({
    propType: '',
    propSize: 0,
    title: '',
    price: 0,
    flatType: '',
    bathrooms: 0,
    isfurnished: false,
    balcony: 0,
    rent: 0,
    deposit: 0,
    category: 'SELL', // Default value
    file: null,
    propAddress: {
      adrLine1: '',
      adrLine2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    parking: false,
  });

  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setProperty({ ...property, file: files[0] });
    } else if (['adrLine1', 'adrLine2', 'city', 'state', 'country', 'zipCode'].includes(name)) {
      setProperty({
        ...property,
        propAddress: { ...property["propAddress"], [name]: value },
      });
    } else if (name === 'isfurnished' || name === 'parking') {
      setProperty({ ...property, [name]: e.target.checked });
    } else {
      setProperty({ ...property, [name]: value });
    }
  };

  const handleRadioChange = (e) => {
    setProperty({ ...property, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(property);
    
    const formData = new FormData();

    property.propAddress.city = property.propAddress.city.toUpperCase();
    // Assuming 'file' is the field name for the image
    formData.append("file", property.file);

    // Add other top-level fields from 'property'
    formData.append("propType", property.propType);
    formData.append("propSize", property.propSize);
    formData.append("isfurnished", property.isfurnished);
    formData.append("rent", property.rent);
    formData.append("price", property.price);
    formData.append("parking", property.parking);
    formData.append("title", property.title);
    formData.append("category", property.category);
    formData.append("flatType", property.flatType);
    formData.append("bathrooms", property.bathrooms);
    formData.append("balcony", property.balcony);
    formData.append("deposit", property.deposit);


    // Add fields from the 'propAddress' object
    formData.append("propAddress.adrLine1", property.propAddress.adrLine1);
    formData.append("propAddress.adrLine2", property.propAddress.adrLine2);
    formData.append("propAddress.city", property.propAddress.city);
    formData.append("propAddress.state", property.propAddress.state);
    formData.append("propAddress.country", property.propAddress.country);
    formData.append("propAddress.zipCode", property.propAddress.zipCode);
    // Handle form submission

    const result = await addProperty(formData, user.id)
    if (result['status'] >= 200 || result['status'] < 300) {
      toast.success('successfully added')
      navigate('/properties')
    } else {
      toast.error('failed to add ')
    }

    console.log(result)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 sm:flex justify-center">ADD PROPERTY</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Existing fields */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Property Type</label>
              <input
                type="text"
                name="propType"
                value={property.propType}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Property Size (sq ft)</label>
              <input
                type="number"
                name="propSize"
                value={property.propSize}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={property.title}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={property.price}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Category radio buttons */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Category</label>
              <div className="mt-2 flex">
                <label className="mr-6">
                  <input
                    type="radio"
                    name="category"
                    value="SELL"
                    checked={property.category === 'SELL'}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Sell
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="RENT"
                    checked={property.category === 'RENT'}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  Rent
                </label>
              </div>
            </div>
            {/* Continue with other fields */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Flat Type</label>
              <input
                type="text"
                name="flatType"
                value={property.flatType}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={property.bathrooms}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Furnished</label>
              <input
                type="checkbox"
                name="isfurnished"
                checked={property.isfurnished}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Balcony</label>
              <input
                type="number"
                name="balcony"
                value={property.balcony}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Rent</label>
              <input
                type="number"
                name="rent"
                value={property.rent}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Deposit</label>
              <input
                type="number"
                name="deposit"
                value={property.deposit}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Parking</label>
              <input
                type="checkbox"
                name="parking"
                checked={property.parking}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Address Line 1</label>
              <input
                type="text"
                name="adrLine1"
                value={property.propAddress.adrLine1}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Address Line 2</label>
              <input
                type="text"
                name="adrLine2"
                value={property.propAddress.adrLine2}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                value={property.propAddress.city}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">State</label>
              <input
                type="text"
                name="state"
                value={property.propAddress.state}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={property.propAddress.country}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={property.propAddress.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium">Image</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm hover: focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
