import { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/custom/Navbar'
import AdminProfile from './pages/AdminProfile'
import Properties from './pages/Properties'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import About from './components/custom/about/About'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import AddProperty from './pages/AddProperty'
import Services from './pages/Services'
import Contact from './pages/Contact'
import UserForm from './pages/UserForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OwnerForm from './pages/OwnerForm'
export const UserContext = createContext(null);

function App() {
  
  const [user,setUser] = useState(null);

  return (
    <UserContext.Provider value={{user,setUser}}>
      <div className='w-full p-1'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/admin' element={<AdminProfile />}></Route>
          <Route path='/properties' element={<Properties />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/addproperty' element={<AddProperty />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/userform' element={<UserForm/>}></Route>
          <Route path='/ownerform' element={<OwnerForm/>}></Route>
          <Route path='/profile/:username' element={<UserProfile />}></Route>
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
        <ToastContainer/>
      </div>
    </UserContext.Provider>
  )
}

export default App
