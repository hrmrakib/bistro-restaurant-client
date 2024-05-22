import { Helmet } from "react-helmet-async";
import MenuBanner from "../../shared/MenuBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../../hooks/useMenu";
import OrderTab from "../OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bitro Boss | Shop</title>
      </Helmet>
      <MenuBanner
        url={"/assets/menu/banner3.jpg"}
        heading={"OUR SHOP"}
        para={"Would you like to try a dish?"}
      />{" "}
      <div className='my-24 w-[90%] mx-auto'>
        <div className='mb-10 flex justify-center'>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className='flex justify-center items-center mb-5'>
              <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Dessert</Tab>
                <Tab>Soup</Tab>
                <Tab>Drinks</Tab>
              </TabList>
            </div>

            <TabPanel>
              <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
