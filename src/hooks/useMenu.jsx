import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const result = await axiosPublic.get("/menu");
      return result.data;
    },
  });

  return [menu, refetch, loading];
};

export default useMenu;
