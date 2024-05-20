const MenuItem = ({ category }) => {
  return (
    <div>
      <div className='my-24 w-[90%] mx-auto'>
        <div className='grid md:grid-cols-2 gap-10'>
          {category?.map((item) => (
            <div
              key={item._id}
              className='flex items-center justify-between gap-5'
            >
              <img
                className='size-16 rounded-r-full rounded-b-full'
                src={item?.image}
                alt=''
              />
              <div>
                <h2 className='text-2xl font-semibold'>{item?.name}</h2>
                <p>{item?.recipe}</p>
              </div>
              <p className='text-lg text-orange-500 font-bold'>$100</p>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <button className='px-6 py-2 border-b-2 rounded-xl border-b-gray-700'>
            Order Your Favourite Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
