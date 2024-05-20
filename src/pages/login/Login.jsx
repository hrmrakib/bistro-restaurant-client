import React, { useState } from "react";
import img from "/assets/login.jpg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [eye, setEye] = useState(false);

  return (
    <div className='grid lg:grid-cols-2 gap-10 h-screen w-[96%] mx-auto'>
      <div className='flex items-center justify-center'>
        <img className='h-[500px]' src={img} alt='' />
      </div>
      <form className='bg-gray-200 pt-4 px-8 my-3 rounded-lg'>
        <div>
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

        <div>
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

        <div className='my-4'>
          <label className='flex flex-col'>
            <input className='outline-none px-4 py-3 rounded' type='text' />
          </label>
          <span className='font-semibold text-lg text-purple-500 cursor-pointer'>
            Reload Capture
          </span>
        </div>

        <div className='my-7'>
          <span className='text-black text-xl'>
            Type Here - Capture <sup className='text-red-500 text-lg'>*</sup>
          </span>
          <label className='flex flex-col mt-2'>
            <input
              className='outline-none px-4 py-3 rounded'
              type='text'
              placeholder='Type capture'
            />
          </label>
        </div>

        <div>
          <button className='w-full py-2 bg-yellow-600 hover:bg-yellow-400 rounded text-white text-xl'>
            Sign In
          </button>
        </div>

        <p className='text-blue-500 font-bold text-xl text-center my-3'>
          New Here? <Link to='/register'>Create a new account</Link>
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

export default Login;
