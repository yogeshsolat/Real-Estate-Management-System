
import React, { useEffect, useState } from 'react'
import { Label } from '@radix-ui/react-label';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { ownerRegister } from '@/services/owner';

const OwnerForm = () => {

    const [owner, setOwner] = useState(() => ({
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        email: '',
        dob: '',
        alterPhoneNo: '',

        adharId: {
            cardNumber: '',
            location: '',
            createdOn: ''
        },

        totalProperties: 2,

        ownerAddress: {
            adrLine1: '',
            adrLine2: '',
            city: '',
            state: '',
            country: '',
            zipCode: ''
        },

        blocked: false
    }));

    const [confirmPass, setConfirmPass] = useState('')

    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(Object.keys(owner.ownerAddress).includes(name)){
            let obj = {...owner["ownerAddress"],[name]:value}
            setOwner(p=>({
                ...p,
                ownerAddress : obj
            }))
            return
        }
        if(Object.keys(owner.adharId).includes(name)){
            let obj = {...owner["adharId"],[name]:value}
            setOwner(p=>({
                ...p,
                adharId : obj
            }))
            return
        }
        setOwner(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(owner);
    }, [owner])

    const onRegister = async () => {
        // client side validation
        if (owner.firstName.length === 0) {
            toast.error('enter first name')
        } else if (owner.lastName.length === 0) {
            toast.error('enter last name')
        } else if (owner.email.length === 0) {
            toast.error('enter email')
        } else if (owner.password.length === 0) {
            toast.error('enter password')
        } else if (confirmPass.length === 0) {
            toast.error('confirm password')
        } else if (owner.password !== confirmPass) {
            toast.error('password does not match')
        } else {
            // make the API call and receive the result
            owner.ownerAddress.city = owner.ownerAddress.city.toUpperCase()

            const result = await ownerRegister(owner)
            if (result['status'] >= 200 || result['status'] < 300) {
                toast.success('successfully registered as a owner')
                navigate('/signin')
            } else {
                toast.error('Failed to register the owner')
            }

            console.log(result)
        }
    }


    return (
        <div className='grid place-items-center h-[900px]  '>
            <div className='shadow-lg border flex flex-col items-center justify-center  gap-12 p-10 '>
                <h1 className='text-xl font-bold' > OWNER SIGNUP </h1>
                <div className='grid grid-cols-2'>

                    <div className='flex flex-col gap-4' >
                        <Label htmlFor='firstName'>First Name</Label>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Label htmlFor='email'>Email</Label>
                        <Label htmlFor='phoneNumber'>Phone Number</Label>
                        <Label htmlFor='alterPhoneNo'>Alternate Phone Number</Label>
                        <Label htmlFor='dob'>Dob</Label>
                        <Label htmlFor='password'>Password</Label>
                        <Label htmlFor='confirmPass'>Confirm Password</Label>
                        <Label htmlFor='cardNumber'>Aadhar No.</Label>
                        <Label htmlFor='location'>Aadhar location</Label>
                        <Label htmlFor='createdOn'>Aadhar Created On</Label>
                        <Label htmlFor='adrLine1'>Address line 1</Label>
                        <Label htmlFor='adrline2'>Address line 2</Label>
                        <Label htmlFor='city'>City</Label>
                        <Label htmlFor='state'>State</Label>
                        <Label htmlFor='country'>Country</Label>
                        <Label htmlFor='zipCode'>Zip code</Label>
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

                        <Input name="alterPhoneNo"
                            onChange={handleInput}
                            type="number" placeholder="alter Phone no." />

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

                        <Input name="cardNumber"
                            onChange={handleInput}
                            type="number" placeholder="Aadhar no." min='12' max='12' />

                        <Input name="location"
                            onChange={handleInput}
                            type="text" placeholder="location" />

                        <Input name="createdOn"
                            onChange={handleInput}
                            type="date" placeholder="Date of creation" />

                        <Input name="adrLine1"
                            onChange={handleInput}
                            type="text" placeholder="Address line 1" />

                        <Input name="adrLine2"
                            onChange={handleInput}
                            type="text" placeholder="Address line 2" />

                        <Input name="city"
                            onChange={handleInput}
                            type="text" placeholder="city" />

                        <Input name="state"
                            onChange={handleInput}
                            type="text" placeholder="state" />

                        <Input name="country"
                            onChange={handleInput}
                            type="text" placeholder="country" />

                        <Input name="zipCode"
                            onChange={handleInput}
                            type="number" placeholder="zipcode" />
                    </div>


                </div>

                <Button onClick={onRegister}>SignUp</Button>
            </div>
        </div>
    );
}

export default OwnerForm

