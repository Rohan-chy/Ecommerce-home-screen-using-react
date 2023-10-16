import React from 'react'
// import homePic from "../../public/assets/Frame 375381.png"
import homePic from "../assets/Frame 375381.png"

const HomeServices = () => {
    var size=[1,2,3]
  return (
    <section className='w-[1300px] mx-auto shadow-xl my-10'>
        <div className='flex justify-between items-center font-[700] mb-5'>
            <p className='text-center  text-2xl'>Home Services</p>
            <p className='text-[#FD7685]'>View All &gt;</p>
        </div>

        <div className='grid grid-cols-3 pb-3'>
        {
            size.map((number)=>(
            <div key={number}>
            <img src={homePic}alt="homePic" />
            <h1 className='text-center font-[700] text-xl'>Carpenters</h1>
        </div>
            ))
        }
        </div>

    </section>
  )
}

export default HomeServices;