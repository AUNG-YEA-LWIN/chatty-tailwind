import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase p-2 font-bold">
          Your Dream make with our company
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Freely fly your dream
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            We build with 
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 px-2 text-[#00df9a]"
            strings={['React', 'Vue', 'Laravel']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">Framework</p>
        </div>
        <p className='md:text-2xl text-xl text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
// Your Dream make with our company
// Freely fly your dream
// We build with Framework.
// Start integrate with your business and app!!
// Lorem Ipsum is simply dummy text of the printing and typesetting industry.
