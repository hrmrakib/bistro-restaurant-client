import React, { useEffect, useRef, useState } from "react";
import img from "/assets/login.jpg";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [passwordError, setPasswordError] = useState(true);
  const [anyError, setAnyError] = useState("");
  const { createUser, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photoURL } = data;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("");
      setPasswordError("Password must have at least one lowercase letter");
      return;
    } else if (password.length < 6) {
      setPasswordError("");
      setPasswordError("Password length must be at least 6 characters");
      return;
    } else {
      setPasswordError("");

      createUser(email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);

          await updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          });
        })
        .then(() => {
          setUser({
            displayName: name,
            photoURL: photoURL,
            email: email,
          });

          const userInfo = {
            name: name,
            email: email,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Registration successfully!",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate(location?.state ? location?.state : "/", {
                replace: true,
              });
            }
          });
        })
        .catch((err) => {
          console.log(err.message);
          setAnyError(err);
        });
    }
  };

  return (
    <div className='grid lg:grid-cols-2 gap-10 h-screen w-[96%] mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl text-purple-500 font-bold'>Register Now!</h2>
        <img className='h-[500px]' src={img} alt='' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-200 pt-4 px-8 my-3 rounded-lg'
      >
        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Name <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='text'
              {...register("name", { required: true })}
              placeholder='Enter your name'
            />
          </label>
          <p>
            {errors.name && (
              <span className='text-red-600 font-medium'>
                Name is required!
              </span>
            )}
          </p>
        </div>
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
          <p>
            {errors.email && (
              <span className='text-red-600 font-medium'>
                Email is required!
              </span>
            )}
          </p>
        </div>

        <div className='mb-3'>
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
            <p className='text-red-600'>{passwordError}</p>
            <p className='text-red-600'>{anyError}</p>
            <p>
              {errors.password && (
                <span className='text-red-600 font-medium'>
                  Password is required!
                </span>
              )}
            </p>
          </label>
        </div>

        <div className='mb-3'>
          <label className='flex flex-col'>
            <span className='mb-2 text-black text-xl'>
              Photo URL <sup className='text-red-500 text-lg'>*</sup>
            </span>
            <input
              className='outline-none px-4 py-3 rounded'
              type='text'
              {...register("photoURL", { required: true })}
              placeholder='Enter your photoURL'
            />
          </label>
          <p>
            {errors.photoURL && (
              <span className='text-red-600 font-medium'>
                PhotoURL is required!
              </span>
            )}
          </p>
        </div>

        <div>
          <button className='w-full py-2 bg-yellow-600 hover:bg-yellow-400 rounded text-white text-xl'>
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

        <SocialLogin />
      </form>
    </div>
  );
};

export default Register;
