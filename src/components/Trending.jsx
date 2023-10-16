import React from 'react'
// import trending from "../../public/assets/image 51.png"
import trending from "../assets/image 51.png"
import {CiStar} from "react-icons/ci"

const Trending = () => {
    let size=[1,2,3,4];
  return (
    <section className='w-[1300px] mx-auto shadow-xl my-5'>
    <div className=' flex justify-between items-center font-[700] mb-5'>
        <h1 className='text-center  text-2xl'>Trending Now</h1>
        <p className='text-[#FD7685]'>View All &gt;</p>
    </div>
    <div className='grid grid-cols-4 text-center'>
      
            {
              size.map((index)=>(
                <div key={index}>
            <img src={trending} alt="trending" className='rounded-lg' />
             <div className=' bg-[#F8F8F8] pb-3'>
             <p className='font-[600]  text-2xl'>Black Forest Cake</p>
             <div className=' flex justify-center items-center gap-10 text-center my-2  relative'>
             <h1 className=' font-[600] text-2xl'>₹350 </h1>
             <h1 className='text-[#828282] text-xl'>₹399</h1>
             <hr className='w-[45px] border border-[#828282] ml-[100px] mt-[5px] absolute'/>
             {/* <p className='absolute right-20 bottom-2 text-[gray]'>________</p> */}
             </div>
             {/* <img src={pp} alt="price" className='w-[150px] h-[20px]' /> */}
             <div className='flex justify-center items-center gap-7'>
                 <CiStar className='bg-[#FD7685] rounded-full p-1 text-white text-2xl font-[700]'/>
                 <p className='font-[500] text-lg'> 4.2 (50 Reviews)</p>
             </div>
             </div>
            </div>
              ))
            }
      
    </div>
</section>
  )
}

export default Trending;