
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import Darkmode from './Darkmode'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className='bg-white dark:bg-gray-900 py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl dark:text-white'><span className='text-pink-900 font-serif dark:text-pink-400'>G</span>adgeto</h1></Link>
                    <div className='md:flex gap-1 cursor-pointer text-gray-700 dark:text-white items-center hidden'>
                        <MapPin className='text-pink-900 dark:text-pink-400' />
                        <span className='font-semibold '>{location ? <div className='-space-y-2'>
                            <p>{location.county}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown}/>
                    </div>
                    {
                        openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                         <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose/></span></h1>
                         <button onClick={getLocation} className='bg-pink-900 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700'>Detect my location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav data-aos="zoom-in" className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-pink-900 dark:border-pink-400" : "text-black"} cursor-pointer dark:text-white hover:scale-115 duration-500 transition-600`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-pink-900 dark:border-pink-400" : "text-black"} cursor-pointer dark:text-white hover:scale-115 duration-500 transition-600`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-pink-900 dark:border-pink-400" : "text-black"} cursor-pointer dark:text-white hover:scale-115 duration-500 transition-600`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-pink-900 dark:border-pink-400" : "text-black"} cursor-pointer dark:text-white hover:scale-115 duration-500 transition-600`}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7 dark:text-purple-400' />
                        <span className='bg-pink-900 dark:bg-pink-400 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-pink-900 text-white px-3 py-1 rounded-md cursor-pointer"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden dark:-gray-400'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-7 w-7 md:hidden dark:text-gray-400'/>
                    }
                {/* Darkmode switch */}
                <div>
                    <Darkmode/>
                </div>
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
             
    )
}

export default Navbar
