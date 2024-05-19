import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../shared/SectionTitle";
import { FaStar } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const img = "https://i.ibb.co/MMdbHGC/testimonial.png";
const img1 =
  "https://i.ibb.co/bNW2C0Q/young-man-suit-glasses-standing-with-crossed-arms-looking-confident.jpg";
const img2 =
  "https://i.ibb.co/hKW83Vk/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg";
const img3 =
  "https://i.ibb.co/MgzXcgL/businessman-black-suit-with-tie-posing.jpg";

const Testimonial = () => {
  return (
    <div className='my-24'>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />

      <div className='py-5 md:py-10 bg-white px-24'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper z-0'
        >
          <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-2 mb-5 *:text-orange-500 *:text-xl'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='text-3xl text-gray-950  md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <p className='lg:border-b-2 max-w-screen-md text-center pb-5 mt-5 text-gray-600 '>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img1} alt='' />
                <div>
                  <h2 className='text-2xl font-bold text-gray-950 '>
                    Kahlito Volp
                  </h2>
                  <p className='text-gray-700 '>Marketing Officer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-2 mb-5 *:text-orange-500 *:text-xl'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='text-3xl text-gray-950  md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <p className='lg:border-b-2 max-w-screen-md text-center pb-5 mt-5 text-gray-600 '>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img2} alt='' />
                <div>
                  <h2 className='text-2xl font-bold text-gray-950 '>
                    Faiul Simon
                  </h2>
                  <p className='text-gray-700 '>Operating Officer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-2 mb-5 *:text-orange-500 *:text-xl'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='text-3xl text-gray-950  md:text-4xl font-bold mb-3'>
                Quality Service
              </h2>
              <p className='lg:border-b-2 max-w-screen-md text-center pb-5 mt-5 text-gray-600 '>
                To take trivial example which of ever undertakes laborious
                physical exercise, except to obtain some advantage from but who
                has any right to find fault with man who chooses to enjoy.
              </p>
              <div className='flex items-center gap-3 mt-8'>
                <img className='size-16 rounded-full ' src={img3} alt='' />
                <div>
                  <h2 className='text-2xl font-bold text-gray-950 '>
                    Rehel Qazi
                  </h2>
                  <p className='text-gray-700 '>Software Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
