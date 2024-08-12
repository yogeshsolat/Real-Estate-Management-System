import { UserContext } from '@/App'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PasswordIcon from '@/icons/passwordIcon'
import { Mail } from 'lucide-react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className='grid place-items-center h-[700px]'>
      <div className='shadow-lg border flex flex-col items-center justify-center p-16 gap-4'>
        <div className='flex gap-2 items-center'>
          <Mail/>
          <Input type="email" placeholder="Email" />
        </div>
        <div className='flex gap-2 items-center'>
          <PasswordIcon/>
          <Input type="email" placeholder="password" />
        </div>
        <Button onClick={()=>{setUser({});navigate('/')}}>Signin</Button>
      </div>
    </div>
  )
}

export default SignIn
