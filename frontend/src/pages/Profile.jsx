import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProfilePosts from '../components/ProfilePosts'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start'>

<div className='flex flex-col md:w-[90%] w-full mt-8 md:mt-0'>
    <h1 className='text-xl font-bold mb-4'>Your Posts:</h1>
    <ProfilePosts/>
    <ProfilePosts/>
    <ProfilePosts/>
    <ProfilePosts/>
</div>
<div className='md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[35%] w-full md:items-end'>
    <div className='flex flex-col space-y-4 items-start'>
    <h1 className='text-xl font-bold mb-4'>
    Profile
</h1>
<input className='outline-none px-1 py-2 border-b border-gray-800' placeholder='Your Username' type='text'/>
<input className='outline-none px-1 py-2 border-b border-gray-800' placeholder='Your Email' type='email'/>
<input className='outline-none px-1 py-2 border-b border-gray-800' placeholder='Your Password' type='password'/>
<div className='flex items-center space-x-4 mt-8'>
<button className='text-white bg-black font-semibold px-4 py-2 hover:text-black border hover:bg-white border-black'>Update</button>
<button className='text-white bg-black font-semibold px-4 py-2 hover:text-black border hover:bg-white border-black'>Delete</button>
</div>
    </div>

</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile