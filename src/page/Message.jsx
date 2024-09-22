import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Message = () => {
    const[logOut,setLogOut] = useState(false)
    return (
        <div className='bg-white w-full h-full'>
            <div className="w-full h-[100dvh]   relative max-w-[600px] mx-auto chats bg-[#f0f3f6]">{logOut?<h1 className='text-xl p-3 w-40 absolute top-1 z-20 right-4 bg-white shadow-xl border-[1px] border-zinc-400 rounded-xl text-black cursor-pointer logout'>Logout</h1>:""
                }

                <div className=" flex flex-row items-center justify-between  px-7 py-5 bg-[#f0f3f6] h-16">
                    <h1 className='text-3xl font-bold text-zinc-600  flex items-center gap-2'> <span className='name'>Message</span>  </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setLogOut(!logOut)} viewBox="0 0 24 24" className='z-30' width="35" height="35" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="w-full h-12 max-w-[95%] mx-auto rounded-3xl overflow-hidden p-5 bg-white  items-center cursor-pointer sticky top-0 z-10 flex flex-row"><input type="text" placeholder='Search...' className='text-xl w-full bg-transparent outline-none text-black'/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
                    </div>

                <div className="w-full p-3 flex flex-col gap-3 overflow-y-scroll pb-10 side" style={{ maxHeight: "calc(100dvh - 115px)" }}>

                    <NavLink to='/chat'  className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer" ><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </NavLink>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-100 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
