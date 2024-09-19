import React from 'react'
import Person from './Person'

const Navbar = () => {
  return (
    <div className='w-96 h-[100vh]'>
        <h1 className='p-5 text-2xl font-bold name border-b-[1px]'>Message App</h1>
        <div className="w-full h-[90%] overflow-y-auto side">
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        </div>
    </div>
  )
}

export default Navbar
