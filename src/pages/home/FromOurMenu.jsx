import img from "/assets/menu/pizza-bg.jpg";

const FromOurMenu = () => {
  return (
    <div
      className={`relative flex justify-center items-center bg-black bg-opacity-30 bg-[url('/assets/home/chef-service.jpg')] bg-cover bg-center h-[600px]`}
    >
      <div className='w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-35'>
        <div className='flex flex-col justify-center items-center '>
          <div className='mb-20 max-w-96 mx-auto text-center'>
            <h4 className='mb-3 text-orange-300'>--- Check it out! ---</h4>
            <h2 className='text-2xl lg:text-5xl text-white border-y-2 py-5'>
              From Our Menu
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 border-2'>
            <div>
              <img className='w-80' src={img} alt='' />
            </div>
            <div className='text-white'>
              <h3>March 20, 2023</h3>
              <h2>WHERE CAN I GET SOME?</h2>
              <p>
                The interior of Lavender Bistro exudes warmth and intimacy.
                Soft, golden lighting dances across exposed brick walls adorned
                with tasteful artwork, casting a cozy glow over plush leather
                banquettes and reclaimed wooden tables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
