import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosPublic from "../Axios/UseAxiosPublic";



const UseCart = () => {
    const AxiosPublic=UseAxiosPublic()
const { user }=useContext(AuthContext)
const { refetch, data: carts=[]}=useQuery({
    queryKey:['order',user?.email],
    queryFn: async () => {
        const res=await AxiosPublic.get(`/carts?email=${user.email}`)
        return res.data
    }
})

return [carts,refetch]
};

export default UseCart;