import React from 'react'
import {IF} from '../url'
import { Link, useNavigate } from 'react-router-dom'
const ProfilePosts = ({p}) => {
  const navigate=useNavigate()
  return (
    <div className='w-full flex mt-8 space-x-8'>
    {/* left for image*/}
    <div className='w-[50%] justify-center items-center '>
    <img src={IF+p.photo} alt='' className=' object-cover rounded-md '/>
    </div>
    {/* right for content*/}
    <div className='flex flex-col w-[65%]'>
    <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
{p.title}
    </h1>
    <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
        <p>@{p.username}</p>
        <div className='flex space-x-2'>
        <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
        </div>
    
    </div>
    <p className='text-md '>
    {p.desc.slice(0,200)}
   <span onClick={()=>navigate("/posts/post/"+p._id)} className='text-gray-400 cursor-pointer'>...read more</span>
   
    </p>
    </div>
        </div>
  )
}

export default ProfilePosts