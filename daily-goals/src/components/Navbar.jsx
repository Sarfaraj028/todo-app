import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-900 text-white px-10'>
        <h2 className='font-bold py-3'>DailyGoals</h2>
        <ul className='flex gap-5 cursor-pointer hover:transition-transform'>
            <li className='py-3'>Home</li>
            <li className='py-3'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar