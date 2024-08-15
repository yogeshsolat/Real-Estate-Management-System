import { UserContext } from '@/App'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PasswordIcon from '@/icons/passwordIcon'
import { Mail } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '@/services/user'
import { toast } from 'react-toastify'
import logo from '../assets/logo1.png'


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      toast.warning('enter email')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else {
      const result = await login(email, password)
      if (result['isBlocked'] == false) {
        // read the token
        // const token = result['data']['token']
        // const name = result['data']['name']

        ////const { token, name } = result['data']

        // set the data in session storage
        // sessionStorage.token = token
        // sessionStorage.name = name

        // sessionStorage['token'] = token
        // sessionStorage['name'] = name

        // sessionStorage.setItem('token', token)
        // sessionStorage.setItem('name', name)

        sessionStorage.setItem('user', result)
        console.log(result)

        setUser(result)

        toast.success('welcome to the application')
        navigate('/')
      }
      else if (result['isBlocked'] == false) {
        toast.error("you are blocked by admin")
      }
      else {
        toast.error('invalid email or password')
      }
    }
  }




  return (
    <div className='grid place-items-center h-[700px] '>
      <div className='shadow-xl border flex flex-col items-center justify-center p-16 gap-4  '>
      
      <img src={logo} alt="" />

        <div className='flex gap-2 items-center scale-125 '>
          <Mail />
          <Input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email" placeholder="Email" />
        </div>
        <div className='flex gap-2 items-center scale-125 '>
          <PasswordIcon />
          <Input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="email" placeholder="password" />
        </div>

        <div className='flex flex-row'>
          <p>don't have an account?</p>
          <Link className=' hover:underline text-blue-600' to='/signup'> Signup </Link>
        </div>

        {/* <Button onClick={()=>{setUser({});navigate('/')}}>Signin</Button> */}
        <Button onClick={onLogin}>Signin</Button>
      </div>
    </div>
  )
}

export default SignIn
