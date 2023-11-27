import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 rounded-t-xl">
           <div className="flex flex-col text-white gap-2">
             <p className='cursor-pointer hover:underline'>Featured Blogs</p>
             <p className='cursor-pointer hover:underline'>Most viewed</p>
             <p className='cursor-pointer hover:underline'>Readers Choice</p>
           </div>
    
           <div className="flex flex-col text-white gap-2">
             <p className='cursor-pointer hover:underline'>Forum</p>
             <p className='cursor-pointer hover:underline'>Support</p>
             <p className='cursor-pointer hover:underline'>Recent Posts</p>
           </div>
    
           <div className="flex flex-col text-white gap-2">
             <p className='cursor-pointer hover:underline'>Privacy Policy</p>
             <p className='cursor-pointer hover:underline'>About Us</p>
             <p className='cursor-pointer hover:underline'>Terms & Conditions</p>
             <p className='cursor-pointer hover:underline'>Terms of Service</p>
           </div>
        </div>
        <p className="py-2 pb-6 text-center text-white bg-black text-sm">💚All rights reserved @Place It 2023</p>
        </>
        
  )
}

export default Footer