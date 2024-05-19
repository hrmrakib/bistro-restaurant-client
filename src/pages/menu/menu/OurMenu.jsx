import React from "react";
import MenuBanner from "../../shared/MenuBanner";
import TodayOffer from "../TodayOffer";
import Cover from "../../shared/Cover";

const OurMenu = () => {
  return (
    <div>
      <MenuBanner
        url={"/assets/menu/banner3.jpg"}
        heading={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />
      <div className='w-[90%] mx-auto'>
        <TodayOffer />
      </div>
      <Cover />
    </div>
  );
};

export default OurMenu;
