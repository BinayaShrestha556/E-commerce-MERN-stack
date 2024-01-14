import  { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function LoginSignup() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")

  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const[userNameError,setUserNameError]=useState('')
  const[emailError,setEmailError]=useState('')
  const body={
    firstName,
    lastName,
    userName,
    email,
    password
  }
  const clickHandle=()=>{
    axios.post('http://localhost:3000/user/createUser',body).then((res)=>{
     
      res.data.message==="username already exixts"?setUserNameError(res.data.message):setUserNameError("")
      
      res.data.message==="email already exists"?setEmailError(res.data.message):setEmailError("")
      res.data.message==="success"?setIsLoggedIn(true):setIsLoggedIn(false)
      
      
      
    })  }
    useEffect(()=>{
      if(isLoggedIn)navigate("/")
      
    },[isLoggedIn])
   

  return (
    
   <div className='xl:w-[80%] w-full p-2 flex items-center m-auto bg-[#C4C4C4] h-[90vh] mt-24 '>

      <div className='flex flex-col w-full lg:w-1/2 m-auto gap-4'>
        <p className='text-5xl font-playfair-display text-[#07484A]'>Sign Up</p>
        
        <input className='border border-slate-500 w-full py-3 px-5' value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='firstname' />
        <input className='border border-slate-500 w-full py-3 px-5' value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='lastname' />
        <input className='border border-slate-500 w-full py-3 px-5' value={userName} onChange={(e)=>setUserName(e.target.value)}  type="text" placeholder='username' />
        <p className='text-red-500 text-sm'>{userNameError}</p>

        <input className='border border-slate-500 w-full py-3 px-5' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email address"/>
        <p className='text-red-500 text-sm'>{emailError}</p>

        <div className='w-full grid grid-cols-2 gap-4' >
        <input className='border border-slate-500  py-3 px-5' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
        <input className='border border-slate-500  py-3 px-5' type="password" placeholder='conform password' />
        
        
      </div>
<button className='w-full self-center bg-[#07484A] hover:text-black text-white hover:bg-white border border-green-500 py-3 rounded-full' onClick={()=>clickHandle()}>Continue</button>
<div className='flex text-lg'>Already have an account?<p className='underline text-red-500 cursor-pointer' onClick={()=>navigate('/user/login')}>Login here</p></div>
<p>**by continuing, I agree to terms of use and privacy policy**</p>
      </div>
     
    </div>
  )
  
}
