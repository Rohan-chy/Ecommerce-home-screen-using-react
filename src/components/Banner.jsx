import React from 'react'
// import banner from "../../public/assets/image 120.png"
import banner from "../assets/image 120.png"

const Banner = () => {
  return (
    <div className='my-5 w-[1300px] mx-auto'>
        <img src={banner} alt="banner" />
    </div>
  )
}

export default Banner;