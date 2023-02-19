import React from 'react'
import {BsLightbulb, BsBasketFill} from 'react-icons/bs';
 
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-3'>
      <div>LOGO</div>
      <div className='flex items-center space-x-4'>
        <input type="text" placeholder='search' />
        <BsLightbulb />
        <div className='relative'>
          <BsBasketFill/>
          <span className='px-1 bg-red-600 text-white rounded-full text-sm'>3</span>
        </div>
       </div>
    </div>
  )
}

export default Navbar
