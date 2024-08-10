import Awards from '@/components/custom/Awards'
import Hero from '@/components/custom/Hero'
import ImageGrid from '@/components/custom/ImageGrid'
import React from 'react'

const Home = () => {
  return (
    <div className='border p-1'>
      <Hero/>
      <ImageGrid/>
      <Awards/>
    </div>
  )
}

export default Home
