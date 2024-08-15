import React, { useContext, useEffect } from 'react'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { LogInIcon, LogOut, LogOutIcon } from 'lucide-react'
import Sidebar from './Sidebar'
import { UserContext } from '@/App'
import UserIcon from '@/icons/userIcon'

const Navbar = () => {

    const { user, setUser } = useContext(UserContext);

    console.log(user);


    return (
        <nav className=' shadow-xl flex justify-evenly gap-2 px-3 mb-1'>

            <div className=' ' >
                <img src={logo} alt="" className='h-20' />
            </div>
            <div className='p-2 flex-1 sm:flex justify-center gap-5 items-center text-xl font-semibold hidden ' >
                <Link className=' hover:underline' to='/'> Home </Link>
                <Link className=' hover:underline' to='/properties'> Properties </Link>
                <Link className=' hover:underline' to='/about'> About </Link>
                <Link className=' hover:underline' to='/services'> Services </Link>
                <Link className=' hover:underline' to='/contact'> Contact </Link>

            </div>
            {
                //<Link to={`/property/${Property.id}`} className='grid'><Button>Get Details</Button></Link>
                user ?
                    <div className='flex gap-4 items-center'>
                        <Link to={`/profile/${user.firstName}`}>
                            <UserIcon />
                        </Link>
                        <div className=' p-2 flex items-center' >
                            <Link to='/'>
                                <Button onClick={() => { setUser(null); }} className='gap-2'>
                                    <LogOut />
                                    logout
                                </Button>
                            </Link>
                        </div>
                    </div>

                    :
                    <Link to='/signin' className=' p-2 flex items-center' >
                        <Button className='gap-2' >
                            <LogInIcon />
                            Sign in
                        </Button>
                    </Link>
            }

        </nav>
    )
}

export default Navbar
