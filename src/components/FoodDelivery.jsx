import React from 'react'
// import food from "../assets/image 25.png"
import time from "../assets/Union.png"
import "../styles/bg.css"

const FoodDelivery = () => {
    var size=[1,2,3,4]
  return (
    <section className='w-[1300px] mx-auto shadow-xl my-10'>
         <div className='flex justify-between items-center font-[700] mb-5'>
            <p className='text-center  text-2xl'>Fastest Food Delivery</p>
            <p className='text-[#FD7685]'>View All &gt;</p>
        </div>

       <div className='grid grid-cols-4 text-center pb-3 my-10'>
        {
            size.map((number)=>(
                <div key={number} >
                  <div className='offer'>
                    <p className='bg-[#FD7685] w-[105px] rounded-md'>20% OFFER</p>

                    <div className='flex bg-[#FD7685] w-[100px] rounded-md pl-1 gap-1'>
                      <img src={time} alt="time" />
                    <p className='  '>25mins</p>
                    </div>
                  </div>
                {/* <img src={food} alt="" /> */}
                <p className='font-[700]'>Mad Chef’s Kitchen</p>
                <p>3 rd lane, West Mumbai</p>
            </div>
            ))
        }
       </div>
    </section>    
  )
}

export default FoodDelivery;