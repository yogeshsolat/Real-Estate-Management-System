import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='grid place-items-center h-[700px]'>
    
    <div className=' shadow-lg border flex flex-col items-center justify-center p-20 gap-4 rounded-md flex-1 '>
    <h2 className='font-semibold text-lg'>Sign up as a</h2>
    <Link to='/userform'> 
    <Button className=''>User</Button>
    </Link>
    
    <Link to='/ownerform'> 
    <Button>Property Owner</Button>
    </Link>
    </div>
    
    </div>
  )
}

export default SignUp
