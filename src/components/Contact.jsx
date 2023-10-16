import React from 'react'

const Contact = () => {
  return (
    <div className='w-[1300px] h-[300px] mx-auto flex justify-center items-center bg-[#828282]'>
       <div className='text-white'>
       <h1 className='font-[900] text-5xl'>Hey Sleepyhead!</h1><br />
        <p className='text-2xl'>Don’t snooze on Stumptown News. Sign up for new arrivals & bedtime bundles.</p><br />
        <form className='flex gap-4'>
        <input type="email" placeholder='Enter your email...' className='w-[500px] h-[50px] rounded-lg pl-4 outline-none font-[500] text-xl text-black' />
        <button type='submit' className='bg-[#FD7685] w-[200px] rounded-xl text-xl'>SUBSCRIBE</button>
        </form>
       </div>
    </div>
  )
}

export default Contact;