const Cover = ({ img, title, desc }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`relative flex justify-center items-center  bg-cover bg-center h-screen`}
      >
        <div className='absolute w-3/4 mx-auto px-4 lg:px-12 py-8 text-center rounded-sm  text-white bg-black bg-opacity-40'>
          <h2 className='text-4xl font-bold mb-5'>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
