import React from 'react'

const Person = () => {
  return (
    <div className='w-full overflow-hidden mx-auto h-14 max-w-[98%]    hover:shadow-xl group cursor-pointer flex items-center card relative transition-all duration-500 ease-in-out  bg-[#f0f3f6]'>
        <div className="w-10 h-10 group-hover:mx-0 rounded-full bg-purple-400 mx-3 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:absolute  transition-all duration-500 ease-in-out "></div>
        <div className="group-hover:absolute group-hover:text-white group-hover:pl-20 bg-[#f0f3f6]">
            <h1 className='font-semibold bg-[#f0f3f6]'>Rupesh.</h1>
            <p className='text-[10px] tracking-widest text-zinc-400 bg-[#f0f3f6]'>rupeshkw9334@gmail.com</p>
        </div>
    </div>
  )
}

export default Person
