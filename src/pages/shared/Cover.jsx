const Cover = () => {
  return (
    <div>
      <div
        className={`relative flex justify-center items-center bg-[url('/assets/menu/banner3.jpg')] bg-cover bg-center h-screen`}
      >
        <div className='absolute w-3/4 mx-auto px-4 lg:px-12 py-8 text-center rounded-sm  text-white bg-black bg-opacity-40'>
          <h2 className='text-4xl font-bold mb-5'>
            Artistry Meets Rustic Charm - Coverrrrrrr
          </h2>
          <p>
            Nestled in the heart of a quaint cobblestone street, Lavender Bistro
            stands as a beacon of culinary excellence amidst the bustling
            cityscape. Stepping through its weathered wooden doors, guests are
            enveloped in an ambiance that seamlessly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
