import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosPublic from "../Axios/UseAxiosPublic";



const useOrder = () => {
    const AxiosPublic=UseAxiosPublic()
const { user }=useContext(AuthContext)
const { refetch, data: orders=[]}=useQuery({
    queryKey:['order',user?.email],
    queryFn: async () => {
        const res=await AxiosPublic.get(`/allOrders?email=${user.email}`)
        return res.data
    }
})

return [orders,refetch]
};

export default useOrder;