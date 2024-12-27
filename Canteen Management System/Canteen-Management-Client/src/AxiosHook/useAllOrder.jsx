import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";

const useAllOrder = () => {
  const AxiosPublic = UseAxiosPublic();
  const { refetch, data: order = [] } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/allOrders`);
      return res.data;
    },
  });
  console.log(order);
  return [order, refetch];
};
export default useAllOrder;
