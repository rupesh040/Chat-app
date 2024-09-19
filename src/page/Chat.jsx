import React from 'react'
import Bubble from '../components/Bubble'

const Chat = () => {
  return (
    <div className='flex flex-row '>
    <div className="w-full h-[100vh]  p-2 relative max-w-[600px] mx-auto chats bg-[#f0f3f6]">
        <div className="w-full h-full bg-[#f0f3f6] rounded-xl overflow-hidden relative">
            <div className="w-full h-16 border-b-2 px-5 flex items-center gap-3  bg-[#f0f3f6]  absolute top-0 z-10 ">
                <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                <h1 className='font-bold text-lg pb-2 bg-[#f0f3f6]'>Rupesh.</h1>
                <p className='text-sm text-zinc-400 absolute bottom-2 left-[70px] bg-[#f0f3f6]'>rupeshkw9334@gmail.com</p>
            </div>
            <div className="w-full h-full  py-[70px] px-2 overflow-y-scroll  side bg-[#f0f3f6]">
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            </div>
            <div className="w-full h-16 absolute bottom-0  flex justify-center items-center z-10 bg-[#f0f3f6]">
                <div className="w-[90%] h-10 rounded-lg bg-white shadow-lg flex items-center justify-between px-4  ">
                    <input type="text" placeholder='Message...' className='w-[90%] text-lg outline-none ' />
                    <i className="ri-send-plane-fill text-lg font-bold "></i>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Chat
