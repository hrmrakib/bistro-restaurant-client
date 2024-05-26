import React, { useEffect, useRef, useState } from "react";
import img from "/assets/login.jpg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password).then(() => {
      console.log("login succed");

      navigate(from);
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleChangeCapture = (e) => {
    const capValue = e.target.value;

    if (validateCaptcha(capValue)) {
      setDisabled(false);
    }
  };

  return (
    <div className='grid lg:grid-cols-2 gap-10 h-screen w-[96%] mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl text-purple-500 font-bold'>Login Now!</h2>
        <img className='h-[500px]' src={img} alt='' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-200 pt-4 px-8 my-3 rounded-lg'
      >
        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Email <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='email'
              {...register("email", { required: true })}
              placeholder='Enter your email'
            />
          </label>
          {errors.email && <span>Email is required</span>}
        </div>

        <div>
          <label className='relative flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Password <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type={eye ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder='Enter your email'
            />
            <span
              className='absolute right-4 bottom-4 cursor-pointer text-xl'
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
          {errors.password && <span>Password is required</span>}
        </div>

        <div className='my-4'>
          <LoadCanvasTemplate />
        </div>

        <div className='my-7'>
          <span className='text-black text-xl'>
            Type Here - Capture <sup className='text-red-500 text-lg'>*</sup>
          </span>
          <label className='flex flex-col mt-2'>
            <input
              onBlur={handleChangeCapture}
              className='outline-none px-4 py-3 rounded text-lg font-semibold'
              type='text'
              placeholder='Type Capture'
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
          New Here?{" "}
          <Link to='/register' className='underline'>
            Create a new account
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

export default Login;
