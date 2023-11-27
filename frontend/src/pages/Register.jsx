import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import {URL} from '../url'
const Register = () => { 
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
      
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }

  return (
<>
<div className='flex items-center justify-between px-6 md:px-[200px] py-2 border-b border-gray-400'>
<Link to='/'>
          <img src='./img/logo.png' className='scale-50 mx-[-35px] shadow-md'/>
          </Link>
        <h3 className='underline hover:text-blue-500'><Link to='/login'>Login</Link></h3>
        </div>

      <div className='w-full flex justify-center items-center h-[80vh]'>
    <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>Create your Account</h1>
        <input onChange={(e)=>setUsername(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type='text' placeholder='Enter your Username'/>
        <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type='text' placeholder='Enter your Email'/>
        <input onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type='password' placeholder='Enter your Password'/>
        <button onClick={handleRegister} className='w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-300 hover:text-black'>Register</button>
        {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
        <div className='flex justify-center items-center space-x-2 '>
            <p className='text-gray-500'>Already a User?</p>
            <p className='underline hover:no-underline hover:text-blue-500'><Link to='/login'>Login</Link></p>

        </div>
    </div>

</div>
<Footer/>
</>
 
  )
}

export default Register