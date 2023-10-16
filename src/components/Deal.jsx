import React from 'react'
// import kurta from "../../public/assets/image 8.png"
// import jaint from "../../public/assets/image 7.png"
// import sari from "../../public/assets/image 8 (1).png"
// import vest from "../../public/assets/image 7 (1).png"
import kurta from "../assets/image 8.png"
import jaint from "../assets/image 7.png"
import sari from "../assets/image 8 (1).png"
import vest from "../assets/image 7 (1).png"

const Deal = () => {
  const image=[kurta,jaint,sari,vest]
  return (
    <section className='w-[1300px] mx-auto shadow-xl my-10'>
         <div className='flex justify-between items-center font-[700] mb-5'>
            <p className='text-center  text-2xl'>Deal of the Day</p>
            <p className='text-[#FD7685]'>View All &gt;</p>
        </div>

        <div className='grid grid-cols-4 pb-3'>
            {
              image.map((item,index)=>(
                <div key={index} >
            <img src={item} alt="item" className='w-[300px] h-[300px] rounded-lg' />
            
            <p className='font-[700] text-center text-xl '>₹2500 <span className='font-normal text-base'>onwards</span> </p>
            
            
            </div>
              ))
            }

        </div>
    </section>
  )
}

export default Deal;