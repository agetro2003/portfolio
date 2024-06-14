import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className=" flex justify-around items-center bg-slate-800 border-black border-b-4 py-8">
        <h2 className=' text-white text-4xl'>Jesús Ortega</h2>
        <div className=' flex justify-between items-center w-2/6'>
            <ul className=' flex justify-between items-center w-3/4 '>
                <li>
                    <a  href="#">Home</a>
                </li>
                <li >
                    <a  href="#">Projects</a>
                </li>
                <li >
                    <a  href="#">Skills</a>
                </li>
                <li >
                    <a  href="#">Footer</a>
                </li>
            </ul>
            <select className='ml-6 px-2 py-1 rounded-2xl bg-slate-50 hover:bg-slate-600 hover:border-black hover:border-2' aria-label="Language">
                <option value="en">🇬🇧</option>
                <option value="es">🇪🇸</option>
            </select>
        </div>
    </nav>
  )
}

export default Navbar