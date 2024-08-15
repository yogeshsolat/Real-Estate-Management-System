import React, { useContext } from 'react'
import { PropDet } from '@/data/Data'
import { Button } from '../ui/button'
import { Heart, HeartIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { addToList } from '@/services/wishlist'
import { toast } from 'react-toastify'
import { UserContext } from '@/App'

const PropertyCard = ({ Property }) => {

    const {user} = useContext(UserContext)

    const handleWishList = async () => {
        const result = await addToList( user.id ,Property.id) ;
        toast.success("added to wishlist")

        
    }

    return (
        <div className='border shadow-2xl transition-all ease-linear flex flex-col gap-1 rounded-lg p-2 '>
            <img src={`${Property.mainImgUrl}`} alt="propimage" className='sm:min-h-72 flex flex-1 rounded-lg hover:scale-95 transition-all ease-out cursor-pointer ' />
            <hr />
            <text className='font-bold text-2xl pt-1'>{Property.title}</text>
            <div className='flex pt-1 justify-between  items-center'>
                <text className='text-white font-bold text-lg bg-green-500 rounded-xl p-1'>{Property.price}/-</text><br />
                <text className='font-bold text-lg px-2 bg-yellow-100 text-orange-500 rounded-lg' >for {Property.category}</text><br />
                <HeartIcon className='flex items-center scale-125 pr-1' onClick={handleWishList}></HeartIcon>
            </div>
            <Link to={`/property/${Property.id}`} className='grid'><Button>Get Details</Button></Link>
        </div>
    )
}

export default PropertyCard
