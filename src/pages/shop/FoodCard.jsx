import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();

  const handleOrder = (food) => {
    if (user && user.email) {
      // send order to the database

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
        recipe,
      };

      axiosPublic.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is added successfully!`,
            showConfirmButton: false,
            timer: 1900,
          });
          refetch();
        }
      });

      console.log("has a user");
    } else {
      Swal.fire({
        title: "You are not Login!",
        text: "You won't be able to order this without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Please, login!",
            text: "After login order the food!",
            icon: "success",
          });
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div key={_id} className='relative bg-gray-100'>
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
      <div className='absolute top-3 right-2 badge badge-primary p-2'>
        ${price}
      </div>
    </div>
  );
};

export default FoodCard;
