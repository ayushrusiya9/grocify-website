import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 py-12">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between">

                {/* Brand Section */}
                <div className="w-full sm:w-[48%] md:w-[22%] mb-8 md:mb-0 text-center md:text-left">
                    <a href="#" className="text-2xl md:text-3xl font-bold">
                        Gr<span className="text-orange-500 uppercase">o</span>cify
                    </a>
                    <p className="text-zinc-600 mt-4 text-sm md:text-base max-w-[350px] mx-auto md:mx-0">
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <p className="text-zinc-800 mt-5 text-sm">
                        2025 &copy; all rights reserved
                    </p>
                </div>

                {/* Company Section */}
                <ul className="w-[48%] sm:w-[48%] md:w-[18%] mb-6 md:mb-0 text-center md:text-left">
                    <li><h5 className="text-zinc-800 text-xl md:text-2xl font-semibold">Company</h5></li>
                    <li className="mt-3"><a href="#" className="hover:text-orange-500 text-zinc-800 text-sm">About</a></li>
                    <li className="mt-3"><a href="#" className="hover:text-orange-500 text-zinc-800 text-sm">FAQ's</a></li>
                </ul>

                {/* Support Section */}
                <ul className="w-[48%] sm:w-[48%] md:w-[18%] mb-6 md:mb-0 text-center md:text-left">
                    <li><h5 className="text-zinc-800 text-xl md:text-2xl font-semibold">Support</h5></li>
                    <li className="mt-3"><a href="#" className="hover:text-orange-500 text-zinc-800 text-sm">Support Center</a></li>
                    <li className="mt-3"><a href="#" className="hover:text-orange-500 text-zinc-800 text-sm">Feedback</a></li>
                    <li className="mt-3"><a href="#" className="hover:text-orange-500 text-zinc-800 text-sm">Contact Us</a></li>
                </ul>

                {/* Newsletter Section */}
                <div className="w-full sm:w-[48%] md:w-[30%] text-center md:text-left">
                    <h5 className="text-zinc-800 text-xl md:text-2xl font-semibold">Stay Connected</h5>
                    <p className="text-zinc-600 mt-4 text-sm">
                        Questions or Feedback? <br /> We'd love to hear from you.
                    </p>

                    <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden mt-4 w-full max-w-[340px] mx-auto md:mx-0">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            placeholder="Email address"
                            className="h-[42px] px-3 flex-1 focus:outline-none text-sm"
                        />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-3 py-4 text-lg hover:to-orange-600">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
