import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPropById } from '@/services/property';
//import { PropDet } from '@/data/Data';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ContactIcon, Mail, Phone, User2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';


const PropertyDetails = () => {
  const { id } = useParams();
  //   const property = PropDet[id - 1]
  let [property, setPropDet] = useState(null)


  useEffect(() => {
    const func = async () => {
      const resp = await getPropById(id);
      setPropDet(resp);
    }
    func();
  }, [])


  if (property == null)
    return;
  // 


  // const PropertyDetails = () => {
  //   const { id } = useParams(); 
  //   const [property, setProperty] = useState(null);

  //   useEffect(() => {
  //     const fetchPropertyDetails = async () => {
  //       try {
  //         const data = await getPropById(id); 
  //         setProperty(data);
  //       } catch (error) {
  //         console.error('Failed to fetch property details:', error);
  //       }
  //     };

  //     fetchPropertyDetails(); 
  //   }, [id]);


  return (
    // <div className='flex'>

    //   <div className=''>

    //   </div>
    //   ProperyDetails {id}

    // </div>

    <div className="max-w-4xl mx-auto p-4 bg-white text-black">
      <div className="bg-slate-50 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img className="w-full  object-cover  flex flex-1" src={`${property.mainImgUrl}`} alt={property.title} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 border-b border-gray-300 pb-2">{property.title}</h2>
          {/* <p className="text-gray-700 mb-4">{property.description}</p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Category</h3>
              <p className="text-gray-700">{property.category}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Property Type</h3>
              <p className="text-gray-700">{property.propType}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Price</h3>
              <p className="text-gray-700">{property.price}/-</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">BHK config</h3>
              <p className="text-gray-700">{property.flatType}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Area</h3>
              <p className="text-gray-700">{property.propSize} sq ft</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Furnishing</h3>
              <p className="text-gray-700">{property.isfurnished}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bathrooms</h3>
              <p className="text-gray-700">{property.bathrooms}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Balconies</h3>
              <p className="text-gray-700">{property.balcony}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">{property.propAddress.adrLine1} {property.propAddress.adrLine2}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">City</h3>
              <p className="text-gray-700">{property.propAddress.city}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">State</h3>
              <p className="text-gray-700">{property.propAddress.state}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Pincode</h3>
              <p className="text-gray-700">{property.propAddress.zipCode}</p>
            </div>


            <div>
              <h3 className="text-lg font-semibold text-gray-900">Parking</h3>
              <p className="text-gray-700">{property.parking ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Deposit</h3>
              <p className="text-gray-700">${property.deposit}</p>
            </div>

            <div className='  py-16 '>

              <Popover className=''>
                <div className='flex '>
                  <PopoverTrigger> <Button> <ContactIcon /> Get Contact Details</Button></PopoverTrigger>
                  <PopoverContent className='grid gap-4'>
                    <div className='flex gap-4'><User2Icon></User2Icon> {property.owner.firstName} {property.owner.lastName}</div>
                    <div className='flex gap-4'><Phone></Phone> {property.owner.phoneNumber}</div>
                    <div className='flex gap-4'><Mail></Mail> {property.owner.email}</div>
                  </PopoverContent>
                </div>


              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PropertyDetails
