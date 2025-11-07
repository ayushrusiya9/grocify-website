import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex items-center pt-28 md:pt-25 md:flex-row flex-col'>
            {/* Hero content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality..</span>
                <h1 className='md:text-7xl/20 text-5xl/14  font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City 
                </h1>
                <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-8'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>

                <Link to="/products">
                        <Button btnText='View All' />
                </Link>
                
            </div>

            {/* hero image */}
            <div className='flex-1'>
                <img src={Grocery} alt="" />
            </div>
        </div>
      
    </section>
  )
}

export default Hero
