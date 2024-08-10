import React from 'react'

import city1 from '../../assets/city-1.png'
import city2 from '../../assets/city-2.png'
import city3 from '../../assets/city-3.png'
import city4 from '../../assets/city-4.png'
import city5 from '../../assets/city-5.png'
import city6 from '../../assets/city-6.png'
import Strip from './Strip'


const images = [city1, city2, city3, city4, city5, city6]

const ImageGrid = () => {
    return (
        <div className='p-4'>
            <Strip title="trending now"/>
            <div className=' grid gap-4 place-items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    <Image img={city1} />
                    <Image img={city2} />
                    <Image img={city3} />
                </div>
                <div className='sm:grid grid-cols-1 sm:grid-cols-3 gap-5 hidden '>
                    <Image img={city4} />
                    <Image img={city5} />
                    <Image img={city6} />
                </div>
            </div>
        </div>
    )
}

const Image = ({ img }) => {
    return (
        <div className='h-full w-full flex relative'>
            <img className='h-72 brightness-75 hover:brightness-100 rounded-xl hover:scale-[1.056] transition-all ease-linear' src={img} />
            <h1 className='text-xl text-center text-white absolute top-1/2 left-1/2'> Bangalore
            </h1>
        </div>
    )
}

export default ImageGrid
