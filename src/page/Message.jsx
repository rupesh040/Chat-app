import React from 'react'
import { NavLink } from 'react-router-dom'

const Message = () => {
    return (
        <div className='bg-white w-full h-full'>
            <div className="w-full h-[100dvh]   relative max-w-[600px] mx-auto chats bg-[#f0f3f6]">
                <div className=" flex flex-row items-center justify-between border-b-[1px] border-zinc-500 px-7 py-5 bg-[#f0f3f6] h-16">
                    <h1 className='text-2xl font-bold text-zinc-600  flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M8.5 14.5H15.5M8.5 9.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg> <span className='name'>Message</span>  </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>


                <div className="w-full p-3 flex flex-col gap-3 overflow-y-scroll pb-10" style={{ maxHeight: "calc(100dvh - 64px)" }}>
                    <div className="w-full min-h-16 rounded-3xl overflow-hidden p-5 bg-white  items-center cursor-pointer sticky top-0 z-10 flex flex-row"><input type="text" placeholder='search...' className='text-2xl w-full bg-transparent outline-none text-black'/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
                    </div>
                    <NavLink to='/chat'  className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer" ><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </NavLink>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                    <div className="w-full min-h-20 rounded-3xl overflow-hidden p-5 bg-zinc-200 flex items-center cursor-pointer"><img src="https://i.pinimg.com/736x/5b/30/5f/5b305fca208d6162872c715f4c7643e1.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <h1 className='relative text-zinc-800 font-bold px-3 text-xl pb-3'>Rupesh Kumar <span className='absolute left-3 text-zinc-400 top-6 tracking-wider text-sm font-semibold'>rupeshkw@gmail.com</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
