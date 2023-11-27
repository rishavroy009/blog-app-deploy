import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import {FaBars} from "react-icons/fa"
import Menu from './Menu';
import { UserContext } from '../context/UserContext';


const Navbar = () => {
  const [prompt,setPrompt]=useState("")
 const [menu,setMenu] = useState(false)
 const navigate=useNavigate()
 const path=useLocation().pathname
    const showMenu=()=>{
      setMenu(!menu)
    }
    const {user}=useContext(UserContext)
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-2 border-b border-gray-400'>
   
       <Link to='/'>
          <img src='../img/Logo.png' className='scale-50 mx-[-35px] shadow-md'/>
          </Link>
         
        {path==="/" &&<div className='flex justify-center items-center space-x-0 bg-slate-200 p-1 rounded-t-md shadow-md'>

    <input onChange={(e)=>setPrompt(e.target.value)} className='outline-none px-3 bg-slate-200 rounded-md w-full' placeholder='Search a Post' type='text'/>
   <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className='cursor-pointer'><IoSearch className=' scale-110 '/>
</p>
        </div>}
<div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
{user?<h3 className='hover:underline cursor-pointer'><Link to='/write'>Write</Link></h3>:<h3 className='underline'><Link to='/login'>Login</Link></h3>}
{user?<div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}</div>:<h3 className='underline'><Link to='/register'>Register</Link></h3>}
</div>
<div onClick={showMenu} className='md:hidden text-lg'><p className='cursor-pointer relative'><FaBars/></p>
{menu && <Menu/>}
</div>
    </div>
  )
}

export default Navbar