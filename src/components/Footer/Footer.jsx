import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="" className='text-2xl md:text-3xl font-bold '>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>
                    <p className='text-zinc-600 mt-6 max-w-[350px]'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>

                    <p className='text-zinc-800 mt-6 '>
                        2025 &copy; all rights reserved
                    </p>
                </div>


                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="" className='hover:text-orange-500 text-zinc-800 '>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="" className='hover:text-orange-500 text-zinc-800 ' >FAQ's</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="" className='hover:text-orange-500 text-zinc-800 '>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="" className='hover:text-orange-500 text-zinc-800 ' >Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="" className='hover:text-orange-500 text-zinc-800 ' >Contact Us</a>
                    </li>
                </ul>

                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl'>Stay Connected</h5>

                    <p className='text-zinc-600 mt-6'>
                        Questions or Feedbacks ? <br />
                        we'd love to hear from you.
                    </p>

                    <div className=' flex p-1 rounded-lg mt-6 '>
                        <input type="email" name='email' id='email' autoComplete='off' placeholder='Email address'  className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg text-white p-2 text-2xl hover:to-orange-600 cursor-pointer'> 
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;
