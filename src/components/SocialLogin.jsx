import useAuth from "../hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className='flex items-center justify-center gap-6'>
      <span
        onClick={handleGoogleIn}
        className='border cursor-pointer border-black p-4 rounded-full'
      >
        <FaGoogle className='text-2xl' />
      </span>
      {/* <span className='border border-black p-4 rounded-full'>
    <FaGithub className='text-2xl' />
  </span> */}
    </div>
  );
};

export default SocialLogin;
