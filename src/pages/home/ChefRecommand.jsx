import React from "react";
import SectionTitle from "../shared/SectionTitle";
import img1 from "/assets/menu/dessert-bg.jpeg";
import img2 from "/assets/menu/menu-bg.png";
import img3 from "/assets/menu/pizza-bg.jpg";

const ChefRecommand = () => {
  return (
    <div className='my-24'>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />

      <div className='grid lg:grid-cols-3 gap-10'>
        <div className='bg-gray-100'>
          <img className='h-52 md:h-64' src={img1} alt='' />
          <div className='text-center p-5'>
            <h2 className='text-3xl font-bold'>Caeser Salad</h2>
            <p className='my-2'>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets. add to
              cart
            </p>
            <button className='bg-gray-200 px-6 py-2 rounded-md text-lg text-orange-500 font-semibold border-b-4 border-orange-500'>
              ADD TO CART
            </button>
          </div>
        </div>
        <div className='bg-gray-100'>
          <img className='h-52 md:h-64' src={img3} alt='' />
          <div className='text-center p-5'>
            <h2 className='text-3xl font-bold'>Caeser Salad</h2>
            <p className='my-2'>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets. add to
              cart
            </p>
            <button className='bg-gray-200 px-6 py-2 rounded-md text-lg text-orange-500 font-semibold border-b-4 border-orange-500'>
              ADD TO CART
            </button>
          </div>
        </div>

        <div className='bg-gray-100'>
          <img className='h-52 md:h-64' src={img1} alt='' />
          <div className='text-center p-5'>
            <h2 className='text-3xl font-bold'>Caeser Salad</h2>
            <p className='my-2'>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets. add to
              cart
            </p>
            <button className='bg-gray-200 px-6 py-2 rounded-md text-lg text-orange-500 font-semibold border-b-4 border-orange-500'>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommand;
