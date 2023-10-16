import React from 'react'
import {GrLocation} from "react-icons/gr"
import {CiSearch} from "react-icons/ci"
import {AiOutlineShoppingCart} from "react-icons/ai"
// import logo from "../../public/assets/zilUI_Asset 3 1.png"
import logo from "../assets/zilUI_Asset 3 1.png"

const TopBar = () => {
  return (
    <header className=" w-full h-[99px] flex justify-evenly items-center gap-[10px]  text-xl">
        <div className='w-[102px] h-[88px] top-[5px] left-[30px]'>
        <img src={logo} alt="logo" />

        </div>
        <div className='flex items-center gap-1'>
        <GrLocation />
        <p className='text-inter font-[700] '>Select your address</p>
        </div>

        <div className=' flex  border border-black relative rounded-md'>
            <select className='bg-[#ECECEC] rounded-s-md'>
                <option value="all">All</option>
            </select>
            <input type="text" placeholder='Search...' className='pl-3 outline-none' />
            <CiSearch className='bg-[#FD7685] absolute right-0 text-white text-2xl h-[100%] cursor-pointer'/>
        </div>
        <p className='font-[700]'>Account</p>
        <p className='font-[700]'>Orders</p>
        <div className='flex items-center gap-1'>
            <AiOutlineShoppingCart/>
            <p className='font-[700] '>Cart</p>
        </div>
    </header>
  )
}

export default TopBar;