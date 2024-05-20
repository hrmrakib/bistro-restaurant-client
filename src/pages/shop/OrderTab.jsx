import React from "react";
import Order from "./Order";

const OrderTab = ({ items }) => {
  return (
    <div className='grid lg:grid-cols-3 gap-10'>
      {items.map((item) => (
        <Order key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
