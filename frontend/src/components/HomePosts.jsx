import React, { useEffect } from 'react'
import axios from 'axios'
import {URL} from '../url'
import {IF} from '../url'
import { Link } from 'react-router-dom'
const HomePosts = ({post}) => {



  return (
    <div className='w-full flex mt-10 space-x-4 '>
{/* left for image*/}
<div className='w-[40%] h-[220px] flex justify-center items-center '>
<img src={IF+post.photo} alt='' className='h-full w-full object-cover rounded-md '/>
</div>
{/* right for content*/}
<div className='flex flex-col w-[60%]'>
<h1 className='text-md font-bold md:mb-2 mb-1 md:text-2xl'>
{post.title}
</h1>
<div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
    <p>@{post.username}</p>
    <div className='flex space-x-2'>
<p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
<p>{new Date(post.updatedAt).toString().slice(16,21)}</p>
    </div>

</div>
<p className='text-sm md:text-md'>
{post.desc.slice(0,400)}
<Link to="/"><span className='text-gray-500 cursor-pointer'>...Read More</span> </Link>
</p>
</div>
    </div>
  )
}

export default HomePosts