import MenuBanner from "../../shared/MenuBanner";
import SectionTitle from "../../shared/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <MenuBanner
        url={"/assets/menu/banner3.jpg"}
        heading={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />

      <div className='w-[90%] mx-auto my-24'>
        <SectionTitle heading={"Our Location"} subHeading={"Visit Us"} />

        <div className='grid lg:grid-cols-3 gap-10'>
          <div className='border'>
            <div className='bg-orange-400 py-5'>
              <FaPhoneVolume className='w-full text-xl text-black' />
            </div>
            <div className='bg-gray-200 mx-6 mb-6 py-10 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>Phone</h2>
              <p>+880125578996</p>
            </div>
          </div>
          <div className='border'>
            <div className='bg-orange-400 py-5'>
              <IoLocation className='w-full text-xl text-black' />
            </div>
            <div className='bg-gray-200 mx-6 mb-6 py-10 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>Location</h2>
              <p>AB-119, Mirpur, Dhaka</p>
            </div>
          </div>
          <div className='border'>
            <div className='bg-orange-400 py-5'>
              <FaRegClock className='w-full text-xl text-black' />
            </div>
            <div className='bg-gray-200 mx-6 mb-6 py-10 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>Working Hours</h2>
              <p>Mon - Fri: 8.00am - 11.00pm</p>
              <p>Sat - Sun: 10.00am - 12.00pm</p>
            </div>
          </div>
        </div>

        <div className='my-24'>
          <SectionTitle
            heading={"Contact Form"}
            subHeading={"Send Us a Message"}
          />

          <form className='bg-gray-200 p-10'>
            <div className='grid lg:grid-cols-2 gap-10'>
              <label className='flex flex-col'>
                <span className='mb-2 text-black text-xl'>
                  Name <sup className='text-red-500 text-lg'>*</sup>
                </span>
                <input
                  className='outline-none px-4 py-3 rounded'
                  type='text'
                  placeholder='Enter your email'
                />
              </label>

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

            <label className='flex flex-col w-full my-10'>
              <span className='mb-2 text-black text-xl'>
                Phone <sup className='text-red-500 text-lg'>*</sup>
              </span>
              <input
                className='outline-none px-4 py-3 rounded'
                type='text'
                placeholder='Enter your phone number'
              />
            </label>

            <div>
              <span className='mb-5 text-black text-xl'>
                Message <sup className='text-red-500 text-lg'>*</sup>
              </span>
              <textarea
                className='w-full outline-none h-40 p-5 rounded'
                name=''
                id=''
                placeholder='Type your message'
              ></textarea>
            </div>

            <div className='border py-5 px-3 flex items-center gap-6 rounded-md bg-gray-100 mt-6 w-max'>
              <input
                type='checkbox'
                //  defaultChecked
                className='checkbox'
              />
              <span>I am not roboot</span>
              <img src='' alt='' />
            </div>

            <div className='text-center mt-5'>
              <button className='btn bg-orange-500 hover:bg-black text-white'>
                Send Message 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
