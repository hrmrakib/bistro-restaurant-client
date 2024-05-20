import React from "react";
import MenuBanner from "../../shared/MenuBanner";
import Cover from "../../shared/Cover";
import { Helmet } from "react-helmet-async";
import MenuItem from "../MenuItem";
import useMenu from "./../../../hooks/useMenu";
import SectionTitle from "../../shared/SectionTitle";
import saladImg from "/assets/menu/salad-bg.jpg";
import pizzaImg from "/assets/menu/pizza-bg.jpg";
import dessertImg from "/assets/menu/dessert-bg.jpeg";
import soupImg from "/assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const popular = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bitro Boss | Menu</title>
      </Helmet>
      <MenuBanner
        url={"/assets/menu/banner3.jpg"}
        heading={"OUR MENU"}
        para={"Would you like to try a dish?"}
      />

      <div className='mt-20'>
        <SectionTitle
          heading={"Today's Offer"}
          subHeading={"--- Don't miss! ---"}
        />
        <MenuItem category={popular} />
      </div>

      {/* repeated content */}

      <div>
        <Cover
          img={saladImg}
          title={"Salad"}
          desc={
            "The interior of The Azure Bistro is a perfect blend of modern elegance and cozy comfort."
          }
        />
        <MenuItem category={salad} />
      </div>

      <div>
        <Cover
          img={pizzaImg}
          title={"Pizza"}
          desc={
            "The interior of The Azure Bistro is a perfect blend of modern elegance and cozy comfort."
          }
        />
        <MenuItem category={pizza} />
      </div>

      <div>
        <Cover
          img={dessertImg}
          title={"Dessert"}
          desc={
            "The interior of The Azure Bistro is a perfect blend of modern elegance and cozy comfort."
          }
        />
        <MenuItem category={dessert} />
      </div>
      <div>
        <Cover
          img={soupImg}
          title={"Soup"}
          desc={
            "The interior of The Azure Bistro is a perfect blend of modern elegance and cozy comfort."
          }
        />
        <MenuItem category={soup} />
      </div>
    </div>
  );
};

export default OurMenu;
