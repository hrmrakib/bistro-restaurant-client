import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className='mb-20 max-w-96 mx-auto text-center'>
      <h4 className='mb-3 text-orange-500'>{subHeading}</h4>
      <h2 className='text-2xl lg:text-5xl border-y-2 py-5'>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
