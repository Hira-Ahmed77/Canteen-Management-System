import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAdmin from "../AxiosHook/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";




const AdminSecurity = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading) {
        return <h2 className='text-center text-2xl'>Loading...</h2>;
    }
    
    if (user && isAdmin) {
        return children;
    } 
    
    return <Navigate state={location.pathname} to='/login' />;
};

export default AdminSecurity;



