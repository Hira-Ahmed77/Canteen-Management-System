import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";


const useMenu = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: menu=[]}=useQuery({
        queryKey:['menu'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/menu`)
            return res.data
        }
    })
        console.log(menu)
        return [menu,refetch]
}
export default useMenu;