import SectionTitle from "../shared/SectionTitle";
import img1 from "/assets/menu/dessert-bg.jpeg";
import img2 from "/assets/menu/menu-bg.png";
import img3 from "/assets/menu/pizza-bg.jpg";
import img4 from "/assets/menu/salad-bg.jpg";
import img5 from "/assets/menu/soup-bg.jpg";

const OurMenu = () => {
  return (
    <div className='my-24'>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"--- Check it out! ---"}
      />

      <div className='grid md:grid-cols-2 gap-10'>
        <div className='flex items-center gap-5'>
          <img
            className='size-16 rounded-r-full rounded-b-full'
            src={img1}
            alt=''
          />
          <div>
            <h2 className='text-2xl font-semibold'>Checken Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.
            </p>
          </div>
          <p className='text-lg text-orange-500 font-bold'>$100</p>
        </div>
        <div className='flex items-center gap-5'>
          <img
            className='size-16 rounded-r-full rounded-b-full'
            src={img2}
            alt=''
          />
          <div>
            <h2 className='text-2xl font-semibold'>Checken Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.
            </p>
          </div>
          <p className='text-lg text-orange-500 font-bold'>$100</p>
        </div>
        <div className='flex items-center gap-5'>
          <img
            className='size-16 rounded-r-full rounded-b-full'
            src={img3}
            alt=''
          />
          <div>
            <h2 className='text-2xl font-semibold'>Checken Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.
            </p>
          </div>
          <p className='text-lg text-orange-500 font-bold'>$100</p>
        </div>
        <div className='flex items-center gap-5'>
          <img
            className='size-16 rounded-r-full rounded-b-full'
            src={img4}
            alt=''
          />
          <div>
            <h2 className='text-2xl font-semibold'>Checken Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.
            </p>
          </div>
          <p className='text-lg text-orange-500 font-bold'>$100</p>
        </div>
        <div className='flex items-center gap-5'>
          <img
            className='size-16 rounded-r-full rounded-b-full'
            src={img5}
            alt=''
          />
          <div>
            <h2 className='text-2xl font-semibold'>Checken Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.
            </p>
          </div>
          <p className='text-lg text-orange-500 font-bold'>$100</p>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
