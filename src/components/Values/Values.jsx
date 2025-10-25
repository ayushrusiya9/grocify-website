import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa6";
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import basKet from '../../assets/basket-full-vegetables.png'

const Values = () => {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight='Our' heading='Values'/>

        <div className='flex'>
            <div></div>

            <div>
                <img src={basKet} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Values


const values = [
    {
        id:1,
        title:'Trust',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart/>
    },
    {
        id:2,
        title:'Always Fresh',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf/>
    },
    {
        id:3,
        title:'Food Safety',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt/>
    },
    {
        id:4,
        title:'100% Oraganic',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    },
]