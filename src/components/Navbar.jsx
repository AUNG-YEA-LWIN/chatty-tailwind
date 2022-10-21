import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

const [nav, setNav] = useState(true);

const handleNav = () => {
    setNav(!nav);
}

  return (
    <div className="max-w-[1240px] h-24 flex justify-between items-center mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/">Chatty-Tailwind</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4"><NavLink to='/'>Home</NavLink></li>
        <li className="p-4"><NavLink to='/company'>Company</NavLink></li>
        <li className="p-4"><NavLink to='/resources'>Resources</NavLink></li>
        <li className="p-4"><NavLink to='/about'>About</NavLink></li>
        <li className="p-4"><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        { !nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} /> }
      </div>
      <div className={!nav ? 'w-[60%] h-full fixed left-0 top-0 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-7">
            Chatty-Tailwind
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600"><NavLink to='/'>Home</NavLink></li>
          <li className="p-4 border-b border-gray-600"><NavLink to='/company'>Company</NavLink></li>
          <li className="p-4 border-b border-gray-600"><NavLink to='/resources'>Resources</NavLink></li>
          <li className="p-4 border-b border-gray-600"><NavLink to='/about'>About</NavLink></li>
          <li className="p-4 border-b border-gray-600"><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
