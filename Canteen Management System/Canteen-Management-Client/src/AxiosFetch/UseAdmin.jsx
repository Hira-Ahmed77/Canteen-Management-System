import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const AxiosSecure = UseAxiosSecure();
  // use axios secure with tanstack  query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await AxiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default UseAdmin;
