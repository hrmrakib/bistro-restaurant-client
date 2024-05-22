import React, { useEffect, useRef, useState } from "react";
import img from "/assets/login.jpg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className='grid lg:grid-cols-2 gap-10 h-screen w-[96%] mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl text-purple-500 font-bold'>Register Now!</h2>
        <img className='h-[500px]' src={img} alt='' />
      </div>
      <form onSubmit={""} className='bg-gray-200 pt-4 px-8 my-3 rounded-lg'>
        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Name <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='text'
              placeholder='Enter your name'
            />
          </label>
        </div>
        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Email <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='email'
              placeholder='Enter your email'
            />
          </label>
        </div>

        <div className='mb-3'>
          <label className='relative flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Password <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type={eye ? "text" : "password"}
              placeholder='Enter your email'
            />
            <span
              className='absolute right-4 bottom-4 cursor-pointer text-xl'
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
        </div>

        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Photo URL <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='email'
              placeholder='Enter your photoURL'
            />
          </label>
        </div>

        <div>
          <button
            disabled={disabled}
            className='disabled:cursor-not-allowed w-full py-2 bg-yellow-600 hover:bg-yellow-400 rounded text-white text-xl'
          >
            Sign In
          </button>
        </div>

        <p className='text-blue-500 font-bold text-xl text-center my-3'>
          Already have an account!{" "}
          <Link to='/login' className='underline'>
            Please Login
          </Link>
        </p>

        <p className='text-center mb-3'>or Sign In with</p>

        <div className='flex items-center justify-center gap-6'>
          <span className='border border-black p-4 rounded-full'>
            <FaGoogle className='text-2xl' />
          </span>
          <span className='border border-black p-4 rounded-full'>
            <FaGithub className='text-2xl' />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
