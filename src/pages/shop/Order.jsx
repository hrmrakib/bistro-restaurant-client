import React from "react";

const Order = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  return (
    <div key={_id} className='bg-gray-100'>
      <img className='w-full h-52 md:h-64' src={image} alt='' />
      <div className='text-center p-5'>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p className='my-2'>{recipe} </p>
        <button className='bg-gray-200 px-6 py-2 rounded-md text-lg text-orange-500 font-semibold border-b-4 border-orange-500'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Order;
