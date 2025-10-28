import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from '../../assets/all-banner.jpg'
import Grocery from "../../assets/grocery.png"
import Button from '../Button/Button'
import Banner from '../Banner/Banner'

const Contact = () => {
    return (
        <div>
            <Banner title='Contact Us' bg={bgImage} />

            {/* conact us content */}
            <div className='py-15 max-w-[1400px] mx-auto px-10 flex items-center md:flex-row flex-col'>
                
                <div className='flex-1'>
                    <h2 className='text-orange-500 text-lg font-semibold'>Contact Us</h2>
                    <h1 className='md:text-6xl/20 text-4xl/14 font-bold mt-3'>
                        Get in Touch with <span className='text-orange-500'>Our Team</span>
                    </h1>
                    <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-8'>
                        Have any questions or need help with your order? Fill out the form below and our team will get back to you shortly.
                    </p>

                    <form className='space-y-4 max-w-md'>
                        <input type="text" placeholder="Your Name" className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500' />
                        <input type="email" placeholder="Your Email" className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500' />
                        <textarea placeholder="Your Message" rows="4" className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500'></textarea>
                        <Button btnText="Send Message" />
                    </form>
                </div>

                {/* Contact image */}
                <div className='flex-1 mt-10 md:mt-0'>
                    <img src={Grocery} alt="Contact us"  />
                </div>
            </div>
        </div>
    )
}

export default Contact
