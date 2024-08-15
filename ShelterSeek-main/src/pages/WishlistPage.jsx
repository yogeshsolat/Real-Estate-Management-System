import WishListCard from '@/components/custom/WishListCard';
import { getWishList } from '@/services/wishlist';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const WishlistPage = () => {
    const { id } = useParams();

    let [propDet, setPropDet] = useState(null)
    let [del, setDelete] = useState(0)

  useEffect(() => {
    const func = async () => {
      const resp= await getWishList(id);
      setPropDet(resp);
    }
    func();
  }, [del])

  if(propDet==null)
  return;


  return (
    <div>
       <div className='flex'>
      {
          propDet.map((property) => (

             <div className='sm:p-4'><WishListCard Property={property.propDT} setDelete={setDelete} /></div>

          ))

        }
    </div>
    </div>
  )
}

export default WishlistPage
