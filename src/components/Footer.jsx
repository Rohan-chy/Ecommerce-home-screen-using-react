import React from 'react'
import playstore from "../assets/Group 238550.png"
import apple from "../assets/Vector.png"
import QR from "../assets/image 119.png"
import logo from "../assets/zilUI_Asset 3 1.png"
import socialMedia from "../assets/Group 3598.png"

const Footer = () => {
  return (
    <footer className='w-[1300px] mx-auto flex justify-evenly mt-10'>
        <div>
            <h1 className='font-[700] text-2xl'>Download the Zil App</h1><br />
            <div className='flex gap-2'>
            <button className='flex bg-black text-white p-2 rounded-lg'>
                <img src={playstore} alt="" />
                <div>
                    <p>Get it on</p>
                    <p className='text-xl'>Google Play</p>
                </div>
            </button>
            <button className='flex bg-black text-white p-2 rounded-lg'>
                <img src={apple} alt="" />
                <div>
                    <p>Download on the</p>
                    <p className='text-xl'>App Store</p>
                </div>
            </button>
            </div><br />
            <div className='flex justify-center text-center font-[500] pb-3'>
                <div>
                <img src={QR} alt="" className='w-[120px] h-[100px]'/>
                <p className='text-[red]'>Zil</p>
                </div>
                <div>
                <img src={QR} alt="" className='w-[120px] h-[100px]'/>
                <p className='text-[red]'>Zil <span className='text-black'>Partner</span></p>
                </div>
                <div>
                <img src={QR} alt="" className='w-[120px] h-[100px]'/>
                <p className='text-[red]'>Zil <span className='text-black'>Delivery</span></p>
                </div>
                
            </div>
        </div>

        <div className='font-[700] '>
            <h1 className=' text-2xl'>Get To Know Us</h1><br />
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Terms And Conditions</p>
            <p>Privacy Policy</p>
            <p>Return And Refund Policy</p>
            <p>Payment Options</p>
            <p>Shipping Policy</p>
        </div>

        <div className='font-[700]'>
            <h1 className=' text-2xl'>Let Us Help You</h1><br />
            <p>Your Acount</p>
            <p>Returns Center</p>
            <p>100% Purchase Production</p>
            <p>ZIL App Download</p>
            <p>Help</p>
        </div>

        <div>
            <img src={logo} alt="logo" />
            <img src={socialMedia} alt="socialMedia" />
        </div>
       
    </footer>
  )
}

export default Footer;