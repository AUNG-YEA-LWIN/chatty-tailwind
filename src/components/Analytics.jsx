import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto py-4' src={Laptop} alt="laptop"  />
        <div className='flex flex-col justify-center'>
          <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            nam corporis iusto libero dolore id excepturi placeat iste maiores
            repellendus voluptatem molestias? Similique reprehenderit
            distinctio, praesentium qui et illo incidunt.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
