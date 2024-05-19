import img from "/assets/home/chef-service.jpg";

const HomeCover = () => {
  return (
    <div
      className={`relative flex justify-center items-center bg-[url('/assets/home/chef-service.jpg')] bg-cover bg-center h-96`}
    >
      <div className='absolute w-10/12 mx-auto px-4 lg:px-12 py-8 text-center rounded-sm  bg-white text-black'>
        <h2 className='text-4xl font-bold mb-5'>Artistry Meets Rustic Charm</h2>
        <p>
          Nestled in the heart of a quaint cobblestone street, Lavender Bistro
          stands as a beacon of culinary excellence amidst the bustling
          cityscape. Stepping through its weathered wooden doors, guests are
          enveloped in an ambiance that seamlessly
        </p>
      </div>
    </div>
  );
};

export default HomeCover;
