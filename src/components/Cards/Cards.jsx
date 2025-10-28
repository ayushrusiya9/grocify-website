import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Cards = ({image,name,price}) => {
    return (
        <div className='bg-zinc-100 p-5 rounded-xl'>
            {/* card icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300 '>
                    <FaHeart/>
                </span>
                <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-3 py-2 rounded-lg md:text-lg text-md  hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
                    <FaPlus/>
                </button>
            </div>

            {/* Card image */}
            <div className='w-full h-50'>
                <img src={image} className='w-full h-full object-contain mx-auto' />
            </div>

            {/* card content */}
            <div className='text-center'>
                <h3 className='text-2xl'>{name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>&#8377; {price.toFixed(2)}</p>
                <Link to='/order' state={{"name":name,"price":price}}>
                    <Button btnText='Shop Now'/>
                </Link>
            </div>
        </div>
    )
}

export default Cards
