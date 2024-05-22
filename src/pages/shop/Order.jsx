import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Order = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();

  const handleOrder = (food) => {
    console.log(food);

    // if (user && user.email) {

    // } else {
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire({
    //         title: "Deleted!",
    //         text: "Your file has been deleted.",
    //         icon: "success",
    //       });
    //     }
    //   });
    // }
  };

  return (
    <div key={_id} className='bg-gray-100'>
      <img className='w-full h-52 md:h-64' src={image} alt='' />
      <div className='text-center p-5'>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p className='my-2'>{recipe} </p>
        <button
          onClick={() => handleOrder(item)}
          className='bg-gray-200 px-6 py-2 rounded-md text-lg text-orange-500 font-semibold border-b-4 border-orange-500'
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Order;
