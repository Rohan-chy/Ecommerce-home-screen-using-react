import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const NavBar = () => {
  return (
    <div className='w-full flex items-center gap-10 bg-black text-white font-[600] text-xl'>
        <div className='flex items-center pl-5 py-4 gap-1'>
            <AiOutlineMenu/>
            <p>All</p>
        </div>
        <p>Cake & Flowers</p>
        <p>Food</p>
        <p>Home Services</p>
        <p>Fashion</p>
        <p>Delivery</p>

    </div>
  )
}

export default NavBar;