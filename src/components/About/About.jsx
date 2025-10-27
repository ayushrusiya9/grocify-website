import React from 'react'
import Banner from '../Banner/Banner'
import aboutImage from '../../assets/about-banner.webp'

const About = () => {
  return (
    <div>
        <Banner title='About Us' bg={aboutImage} />
    </div>
  )
}

export default About
