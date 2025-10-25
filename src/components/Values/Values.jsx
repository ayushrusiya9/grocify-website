import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa6";
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import basKet from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = values.slice(0, 2).map(item => {
        return (
            <div className='flex md:flex-row-reverse items-center gap-7 mb-10' key={item.id}>
                <div>
                    <span className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
                        {item.icon}
                    </span>
                </div>


                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-800'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = values.slice(2).map(item => {
        return (
            <div className='flex items-center gap-7 mb-10' key={item.id}>
                <div>
                    <span className="bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl ">
                        {item.icon}
                    </span>
                </div>


                <div >
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-800'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 pY-20 '>
                <Heading highlight='Our' heading='Values' />

                <div className='flex md:flex-row flex-col items-center md:gap-5 mt-15'>
                    {/* left values */}
                    <div className='md:min-h-100 gsp-15 flex flex-col justify-between '>
                        {leftValues}
                    </div>

                    <div className='md:w-1/2 md:flex hidden'>
                        <img src={basKet} alt="" />
                    </div>

                    {/* right values */}
                    <div className='min-h-100 flex flex-col md:justify-between'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values


const values = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Oraganic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    },
]