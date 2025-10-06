import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaMailBulk, FaMobileAlt } from 'react-icons/fa'
import { FaGithub,  FaLinkedin, FaLocationArrow} from 'react-icons/fa6'

const Footer = () => {
  return (
    
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='text-pink-900 text-2xl font-bold'>Gadgeto</h1>
            </Link>
            <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
            <p className='mt-2 text-sm flex items-center gap-1'>
            <FaLocationArrow />
            Bhopal, Madhya Pradesh</p>
            <p className='text-sm py-2 flex items-center gap-1'>
          <FaMailBulk/>ritika977000@gmail.com</p>
            <p className='text-sm flex gap-1 items-center'>
           <FaMobileAlt /> 
             (+91) 9770002567</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <Link to={'/contact'}><li>Contact Us</li></Link>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                {/* <FaFacebook/>
                <FaInstagram/>
                <FaGithub/>
                <FaLinkedinIn/> */}
                <a href="https://www.instagram.com/coderthink24/" target='blank'>
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://github.com/RitikaSingh2408" target='blank'>
                  <FaGithub className="text-2xl" />
                </a>
                <a href="www.linkedin.com/in/ritika-singh-0a8387249" target='blank'>
                  <FaLinkedin className="text-2xl" />
                </a>
                 </div>
        </div>
        

          <div>
              
                
              
            </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-pink-900 text-white px-4 rounded-r-md hover:bg-pink-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-pink-900'>Gadgeto</span>. All rights reserved</p>
      </div>
    </footer>
    
  )
}

export default Footer