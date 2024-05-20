import React from "react";
import HeroBanner from "../../../components/header/HeroBanner";
import OrderOnline from "../OrderOnline";
import HomeCover from "../HomeCover";
import OurMenu from "../OurMenuHome";
import CallUs from "../CallUs";
import ChefRecommand from "../ChefRecommand";
import FromOurMenu from "../FromOurMenu";
import Testimonial from "../Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bitro Boss | Home</title>
      </Helmet>
      <HeroBanner />
      <div className='w-[90%] mx-auto'>
        <OrderOnline />
        <HomeCover />
        <OurMenu />
        <CallUs />
        <ChefRecommand />
      </div>

      <FromOurMenu />

      <div className='w-[90%] mx-auto'>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
