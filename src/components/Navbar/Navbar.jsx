import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
    const [showMunu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMunu)
    }

    return (
        <>
            <header className='bg-white fixed top-0 right-0 left-0'>
                <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
                    <a href="" className='text-2xl md:text-3xl font-bold '>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

                    {/* Desktop Menu */}
                    <ul className='md:flex gap-x-13 items-center hidden'>
                        <li><a href="" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Products</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact</a></li>
                    </ul>

                    {/* nav action */}
                    <div className='flex items-center gap-x-5'>
                        {/* input field */}
                        <div className='md:flex p-1 border-2 border-orange-500 rounded-4xl hidden '>
                            <input type="text" name="text" id="text" placeholder='Search.....' autoComplete='off'
                                className='flex-1 h-[5vh] px-3 focus:outline-none' />
                            <button className='bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                                <CiSearch />
                            </button>
                        </div>

                        {/* wishlist and bag */}
                        <a href="" className='text-zinc-800 text-2xl'>
                            <FaHeart />
                        </a>
                        <a href="" className='text-zinc-800 text-2xl'>
                            <HiMiniShoppingBag />
                        </a>

                        {/* login signup */}
                        <div className='md:flex md:gap-4 hidden flex'>
                            <a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                                LogIn
                            </a>
                            <a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                                Sign Up
                            </a>
                        </div>

                        {/* Hamburger */}
                        <a className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                            {showMunu ? <RiMenu4Fill/> : <IoMenu /> }
                            
                        </a>
                    </div>

                    {/* mobile menu  */}
                    <ul className={`md:hidden flex flex-col gap-x-13 gap-y-10 bg-orange-500/15 backdrop-blur-xl rounded-lg p-10  items-center absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMunu? 'left-1/2':""}`}>

                        {/* input field */}
                        <li className='flex p-1 border-2 border-orange-500 rounded-4xl '>
                            <input type="text" name="text" id="text" placeholder='Search.....' autoComplete='off'
                                className='flex-1 h-[5vh] px-3 focus:outline-none' />
                            <button className='bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                                <CiSearch />
                            </button>
                        </li>

                        <li><a href="" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Products</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact</a></li>

                        {/* login signin */}
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                             LogIn
                        </a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                            Sign Up
                        </a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
