import React from 'react'

const Heading = ({ highlight, heading }) => {
  return (
    <section className="py-6">
      <div className="w-fit mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-orange-500">{highlight}</span> {heading}
        </h2>
        <div className="w-32 md:w-40 h-1 bg-orange-300 mt-3 md:mt-6 ml-auto"></div>
      </div>
    </section>
  )
}

export default Heading
