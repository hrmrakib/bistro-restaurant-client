import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import slider images
import slider1 from "/assets/home/slide1.jpg";
import slider2 from "/assets/home/slide2.jpg";
import slider3 from "/assets/home/slide3.jpg";
import slider4 from "/assets/home/slide4.jpg";
import slider5 from "/assets/home/slide5.jpg";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../shared/SectionTitle";

const OrderOnline = () => {
  return (
    <div className='my-28'>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"--- From 11.00am to 10.00pm--- "}
      />
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide className='relative'>
            <img className='w-full' src={slider1} alt='' />
            <h3 className='absolute text-shadow bottom-6 w-full text-center text-2xl text-white'>
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={slider2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={slider3} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={slider4} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full' src={slider5} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
