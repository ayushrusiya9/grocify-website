import React from 'react'
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    return (
        <>
            <header className='bg-white fixed top-0 right-0 left-0'>
                <nav className='max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center'>
                    <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

                    {/* Desktop Menu */}
                    <ul className='flex gap-x-13 items-center'>
                        <li><a href="" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Products</a></li>
                        <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact</a></li>
                    </ul>

                    {/* nav action */}
                    <div className='flex items-center gap-x-5'>
                        {/* input field */}
                        <div className='flex p-1 border-2 border-orange-500 rounded-4xl'>
                            <input type="text" name="text" id="text" placeholder='Search.....' autoComplete='off' 
                            className='flex-1 h-[5vh] px-3 focus:outline-none'/>
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
                        <a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                            LogIn
                        </a>
                        <a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>
                            Sign Up
                        </a>

                        {/* Hamburger */}
                        <a href="" className='text-zinc-800 text-3xl'>
                            <IoMenu/>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
