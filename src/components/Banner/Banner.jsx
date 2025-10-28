import React from 'react';

const Banner = ({ title, bg }) => {
  return (
    <div
      className='relative mt-20 flex justify-center items-center bg-center bg-cover text-zinc-400 
                 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]'
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Title */}
      <h2
        className='z-10 bg-white/90 text-zinc-800 rounded-xl font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   px-4 py-2 sm:px-6 sm:py-3 text-center leading-tight'
      >
        {title}
      </h2>
    </div>
  );
};

export default Banner;
