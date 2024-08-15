import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import PasswordIcon from '@/icons/passwordIcon'
import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Label } from '@radix-ui/react-label';
import { register } from '@/services/user';
import { toast } from 'react-toastify';



const UserForm = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        email: '',
        dob: '',
        blocked: false
    });

    const [confirmPass, setConfirmPass] = useState('')

const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

   


    const onRegister = async () => {
        // client side validation
        if (user.firstName.length === 0) {
            toast.error('enter first name')
        } else if (user.lastName.length === 0) {
            toast.error('enter last name')
        } else if (user.email.length === 0) {
            toast.error('enter email')
        } else if (user.password.length === 0) {
            toast.error('enter password')
        } else if (confirmPass.length === 0) {
            toast.error('confirm password')
        } else if (user.password !== confirmPass) {
            toast.error('password does not match')
        } else {
           // make the API call and receive the result
              const result = await register(user)
              if (result['status'] >=200 || result['status'] <300) {
                toast.success('successfully registered a user')
                navigate('/signin')
              } else {
                toast.error('Failed to register the user')
              }

              console.log(result)
        }
    }


    return (
        <div className='grid place-items-center h-[900px]  '>
            <div className='shadow-lg border flex flex-col items-center justify-center  gap-12 p-10 '>
                <h1 className='text-xl font-bold' > USER SIGNUP </h1>
                <div className='grid grid-cols-2'>

                    <div className='flex flex-col gap-4' >
                        <Label htmlFor='firstName'>First Name</Label>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Label htmlFor='email'>Email</Label>
                        <Label htmlFor='phoneNumber'>Phone Number</Label>
                        <Label htmlFor='dob'>Dob</Label>
                        <Label htmlFor='password'>Password</Label>
                        <Label htmlFor='confirmPass'>Confirm Password</Label>
                    </div>


                    <div className='flex flex-col gap-2'>
                        <Input name="firstName"
                            onChange={handleInput}
                            type="text" placeholder="First Name" />

                        <Input name="lastName"
                            onChange={handleInput}
                            type="text" placeholder="Last Name" />

                        <Input name="email"
                            onChange={handleInput}
                            type="email" placeholder="Email" />

                        <Input name="phoneNumber"
                            onChange={handleInput}
                            type="number" placeholder="Phone no." />

                        <Input name="dob"
                            onChange={handleInput}
                            type="date" placeholder="" />

                        <Input name="password"
                            onChange={handleInput}
                            type="password" placeholder="password" />

                        <Input name="confirmPass"
                            onChange={(e) => {
                                setConfirmPass(e.target.value)
                            }}
                            type="password" placeholder="confirm password" />
                    </div>


                </div>

                <Button onClick={onRegister}>SignUp</Button>
            </div>
        </div>
    );
};

export default UserForm
