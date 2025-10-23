import React from 'react'

const Button = ({btnText}) => {
  return (
    <>
      <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg  hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
        {btnText}
        </button>
    </>
  )
}

export default Button
