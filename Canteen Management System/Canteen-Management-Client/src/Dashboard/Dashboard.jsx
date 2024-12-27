import { AuthContext } from "../Components/Provider/AuthProvider";
import { useContext } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import UseAdmin from "../AxiosHook/UseAdmin";

const Dashboard = ({ showSidebar }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin();

  //   if (isAdminLoading ) {
  //       return <p>Loading...</p>; // Or show a loading indicator
  //   }

  return (
    
  
        <div
          className={` bg-[#1b1b1b] w-72 min-h-screen lg:fixed text-white  ${
            showSidebar ? "block" : "hidden"
          } md:block`}
        >
          <ul className="menu  text-center text-lg md:text-xl">
            {user&&  isAdmin && (
              <AdminDashboard></AdminDashboard>
            )  
            }

          </ul>
        </div>
   
  );
};

export default Dashboard;
