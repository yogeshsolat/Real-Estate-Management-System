import React from 'react'
import { useParams } from 'react-router-dom'
import { PropDet } from '@/data/Data';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = PropDet[id - 1]
  return (
    // <div className='flex'>

    //   <div className=''>

    //   </div>
    //   ProperyDetails {id}

    // </div>

    <div className="max-w-4xl mx-auto p-4 bg-white text-black">
      <div className="bg-slate-50 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img className="w-full  object-cover  flex flex-1" src={property.image} alt={property.title} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 border-b border-gray-300 pb-2">{property.title}</h2>
          <p className="text-gray-700 mb-4">{property.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Category</h3>
              <p className="text-gray-700">{property.category}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Price</h3>
              <p className="text-gray-700">{property.price}/-</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Flat Type</h3>
              <p className="text-gray-700">{property.flatType}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Furnishing</h3>
              <p className="text-gray-700">{property.furnishing}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bathrooms</h3>
              <p className="text-gray-700">{property.bathroom}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Balconies</h3>
              <p className="text-gray-700">{property.balcony}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">City</h3>
              <p className="text-gray-700">{property.city}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Area</h3>
              <p className="text-gray-700">{property.area} sq ft</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">{property.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Pincode</h3>
              <p className="text-gray-700">{property.pincode}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Parking</h3>
              <p className="text-gray-700">{property.parking ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Deposit</h3>
              <p className="text-gray-700">${property.deposit}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact No</h3>
              <p className="text-gray-700">{property.contactNo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PropertyDetails
