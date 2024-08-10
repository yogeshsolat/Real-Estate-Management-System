import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/custom/Navbar'
import AdminProfile from './pages/AdminProfile'
import Properties from './pages/Properties'
import SingIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import About from './components/custom/about/About'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import AddProperty from './pages/AddProperty'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='w-full p-1'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/admin' element={<AdminProfile/>}></Route>
      <Route path='/properties' element={<Properties/>}></Route>
      <Route path='/signin' element={<SingIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/addproperty' element={<AddProperty/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/profile/:username' element={<UserProfile/>}></Route>
      <Route path='/property/:id' element={<PropertyDetails/>}/>
     </Routes>
    </div>
  )
}

export default App
