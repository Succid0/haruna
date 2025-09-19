import React from 'react'
import logo from '../assets/Vector.svg'
import logo2 from '../assets/Vector (1).svg'
import HamburgerComponent from './Hamburger'
import { Link } from 'react-router-dom'
function Navbar() {

  return (
    <div className='bg-[#55E6A5] flex justify-between text-[20px] p-[10px] font-poppins h-[70px] '>
        <h1 className='flex'><img src={logo} alt="" width={20}/><span className='pt-[10px]'>Logisti</span></h1>
      <ul className='sm: hidden md:flex gap-[20px] pt-[10px]'>
        <li className=''><a href="#" className='flex'>Home <img src={logo2} alt="" className='w-[20px]'/></a></li>
      <li><Link to="/service">Service</Link></li>
      <li><Link to="/project">Project</Link></li>
       <li><a href="#"  className='flex'>Page <img src={logo2} alt="" className='w-[20px]'/></a></li>
         <li><a href="#"  className='flex'>Contact us</a></li>
      </ul>
     
<button className=' sm:  hidden  text-white ml-[50px]   md:text-white bg-[black] w-[150px] h-[50px] mt-[0] pt-0 rounded-[10px]'>Login </button>
 <div><HamburgerComponent /></div>

    </div>
  )
}

export default Navbar