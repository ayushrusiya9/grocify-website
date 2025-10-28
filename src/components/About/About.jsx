import React from 'react'
import Banner from '../Banner/Banner'
import bgImage from '../../assets/all-banner.jpg'
import Button from '../Button/Button'
import Grocery from "../../assets/grocery.png"


const About = () => {
  return (
    <div>
      <Banner title='About Us' bg={bgImage} />

      {/* about content */}
      <div className='py-10 max-w-[1400px] mx-auto px-10 flex  md:flex-row flex-col '>
        {/* About content */}
        <div className='flex-1 order-2 md:order-1'>
          <h2 className='text-orange-500 text-lg font-semibold'>About Us</h2>
          <h1 className='md:text-6xl/20 text-4xl/14 font-bold mt-3'>
            We Provide <span className='text-orange-500'>Fresh</span> &
            <span className='text-orange-500'> Healthy</span> Food Everyday
          </h1>
          <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-8'>
            Our mission is to make organic and chemical-free fruits and vegetables accessible to everyone.
            We directly source from farmers ensuring quality, freshness, and fair trade.
          </p>
          <Button btnText="Learn More" />
        </div>

        {/* About image */}
        <div className='flex-1 order-1'>
          <img src={Grocery} alt="About us"  />
        </div>
      </div>
    </div>
  )
}

export default About
