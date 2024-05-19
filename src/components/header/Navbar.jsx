import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/menu'>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`bg-black fixed w-full top-0 z-10 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-opacity-30 text-white transition-transform duration-300`}
    >
      <div className='w-[90%] mx-auto navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <img className='size-16' src='/assets/logo.png' alt='logo' />
        </div>
        <div className='navbar-end '>
          <div className='hidden lg:flex lg:mr-3'>
            <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
          </div>
          <div className='flex items-center gap-5'>
            <p className='relative'>
              <FaCartPlus className='text-xl' />
              <span className='absolute right-0 -mt-2 size-6 text-base flex items-center justify-center rounded-full bg-red-500 text-white'>
                00
              </span>
            </p>
            <button>SignOut</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
