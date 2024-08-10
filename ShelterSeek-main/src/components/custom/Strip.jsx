import React from 'react'

const Strip = ({title}) => {
    return (
        <div className='bg-black p-4 sm:p-8 my-4'>
            <h1 className='text-xl sm:text-4xl text-center text-white font-bold'>{title.toUpperCase()}</h1>
        </div>
    )
}

export default Strip
