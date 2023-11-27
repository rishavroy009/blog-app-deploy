import React from 'react'

const ProfilePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-8'>
    {/* left for image*/}
    <div className='w-[50%] justify-center items-center '>
    <img src='https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='' className=' object-cover rounded-md '/>
    </div>
    {/* right for content*/}
    <div className='flex flex-col w-[65%]'>
    <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
    10 Uses of AI in the Modern Era
    </h1>
    <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
        <p>@royrishav</p>
        <div className='flex space-x-2'>
    <p>16/06/2023</p>
    <p>17:40</p>
        </div>
    
    </div>
    <p className='text-md '>
    Humanity has come a long way in our technological advances. From the navigational compass that guided prominent explorers, to the use of steel that fueled the industrial revolution and brought us where we are now.  Even transitioning from the first calculating computer to the machine learning intelligence we have access today; Artificial Intelligence (AI). Both examples have a significant impact in the world of technology.  
    </p>
    </div>
        </div>
  )
}

export default ProfilePosts