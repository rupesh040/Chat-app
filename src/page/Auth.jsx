import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

const Auth = () => {
    const[login,setLogin] = useState(false);
    const[pass,setPass] = useState(true);
    const[lets,setLets] = useState(false);
    const[focus,setFocus] = useState(false);
    const closes = () => {
        setLets(true);
    }
  return (   <div className='w-full h-[100vh] flex justify-center items-center overflow-hidden' >
        <div className="w-96  h-[750px] bg-[#f4f4f4]   rounded-[100px] relative anime">
            <h1 className="text-4xl font-bold text-[#0f0f0f] text-center pt-20  opacity-70" id='auth'>Welcome to our ChatApp</h1>
            <p className='text-center text-zinc-400 pb-5 text-xl pt-2'>Lorem ipsum dolor sit amet.</p>
            <div className="w-[70%]  h-14 border-[1px] bg-[#e8e8e8] mx-auto rounded-lg flex flex-row justify-between  items-center font-bold text-zinc-600  ">
                <h1 className={`${login? "bg-white text-black shadow-md border-[1px] log":""} text-xl px-8 py-3 rounded-lg cursor-pointer `} onClick={()=>setLogin(true)}>Signup</h1>
                <h1 className={`${!login? "bg-white text-black shadow-md border-[1px] log2":""} px-8 py-3 text-xl rounded-lg cursor-pointer`} onClick={()=>setLogin(false)}> Login</h1>
            </div>
            <form action="" className={` ${!login?"mt-8 gap-3":""} w-[90%] mx-auto mt-10 flex flex-col gap-1`}>
                {login?<input type="text" placeholder='Name' className='w-full px-3 py-3 rounded-lg border-[1px] outline-none focus:shadow-md formname text-2xl' required />:""}
                <input type="email" placeholder='Email' className='w-full px-3 py-2 rounded-lg border-[1px] outline-none focus:shadow-md text-2xl' required />
                <label className='relative'>
                <input type={`${pass?"Password":"text"}`} placeholder='Password' className='w-full px-3 py-3 rounded-lg border-[1px] outline-none focus:shadow-md relative text-2xl' required  />
                {pass?<i className="ri-eye-off-line absolute right-4 text-zinc-400 cursor-pointer top-4 text-2xl" onClick={()=>setPass(false)}></i>:<i className="ri-eye-line absolute right-4 text-zinc-600 cursor-pointer top-4 text-2xl" onClick={()=>setPass(true)}></i>}
                </label>
                <label className='text-lg font-semibold text-zinc-500 flex flex-row items-start pt-2 pl-2 cursor-pointer gap-2 '>
            <input type="checkbox" name="option1"  className='mt-1 cursor-pointer shadow-2xl largerCheckbox' required/>
            <p>
            Lorem ipsum, dolor sit amet  quisquam!</p>
           </label>
           <NavLink to='/chat'   className='text-xl font-bold w-full btn bg-zinc-900  py-3 text-white rounded-lg  mt-20 text-center' >{login?"Signup":" Login"}</NavLink>
            </form>
            <div className='max-w-[40%] mx-auto text-[12px] text-center mt-5 pt-3 text-zinc-400 border-t-[1px] border-zinc-200 cursor-pointer group' >@rupesh_kw
            {/* <div className={`w-60 hidden h-40 absolute bg-white ${login?"top-64":"top-60"} left-16 rounded-xl glass border-[1px] shadow-2xl group-hover:block `}>
                <p className='text-sm p-5 font-semibold  text-zinc-500'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam reprehenderit </p>
                <span className='absolute bottom-[-17%] text-zinc-500 left-28'>▼</span>
            </div> */}
            </div>

        </div>
    </div>
  )
}

export default Auth
