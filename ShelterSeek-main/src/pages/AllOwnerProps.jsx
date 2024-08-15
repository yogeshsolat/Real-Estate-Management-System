import PropertyCardOwn from '@/components/custom/PropertyCardOwn';
import { getpropsbyowner } from '@/services/property';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AllOwnerProps = () => {

    const { id } = useParams();

    let [propDet, setPropDet] = useState(null)
    let [del, setDelete] = useState(0)

  useEffect(() => {
    const func = async () => {
      const resp= await getpropsbyowner(id);
      setPropDet(resp);
    }
    func();
  }, [del])

  if(propDet==null)
  return;

  return (
    <div className='flex'>
      {
          propDet.map((property) => (

             <div className='sm:p-4'><PropertyCardOwn Property={property} setDelete={setDelete} /></div>

          ))

        }
    </div>
  )
}

export default AllOwnerProps
