import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { close, logo, menu } from '../assets2';
import { navLinks } from '../constants';

const Navbar = ({ activeTitle }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = (id) => {
    if (id === 'home') {
      navigate('/');
    } else {
      navigate(id);
    }
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
              activeTitle === nav.title ? 'text-mygreen' : 'text-myblack'
            }`}
            onClick={() => handleNavLinkClick(nav.id)}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer ml-4">
          <button
            className="bg-mygreen text-white rounded-lg px-4 h-10 w-24"
            onClick={() => console.log('Sign In clicked')}
          >
            Sign In
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  activeTitle === nav.title ? 'text-red' : 'text-black'
                } ${nav.id === navLinks[navLinks.length - 1].id ? 'mr-0' : 'mb-4'}`}
                onClick={() => handleNavLinkClick(nav.id)}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer">
              <button
                className="bg-mygreen text-white rounded-lg px-4 h-10 w-24"
                onClick={() => console.log('Sign In clicked')}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
