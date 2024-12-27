import { NavLink } from "react-router-dom";
import {
  FaBlog,
  FaBlogger,
  FaBorderAll,
  FaEmpire,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { CgAdd } from "react-icons/cg";


const AdminDashboard = () => {
  return (
    <div className="overflow-y-scroll h-screen">
      <div className="w-[250px]">
        <img
          className="w-44 mx-auto"
          src="https://i.ibb.co/8n3xxBS/Green-and-Black-Simple-Clean-Vegan-Food-Logo-1.png"
          alt=""
        />
        <ul>
          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="/dashboard/admin/home"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <RxDashboard className="mr-2" />
              Admin Dashboard
            </NavLink>
          </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="/dashboard/admin/users"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <FaUsers className="mr-2" />
              Users
            </NavLink>
          </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="admin/customersFeedback"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <VscFeedback className="mr-2" />
              Users Feedback
            </NavLink>
          </li>
          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="/dashboard/admin/addProduct"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <CgAdd className="mr-2" />
              Add Menu
            </NavLink>
          </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="/dashboard/admin/allMenu"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <FaBorderAll className="mr-2" />
              All Menu
            </NavLink>
          </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="admin/addblog"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <FaBlogger />
              Add Blog
            </NavLink>
          </li>
          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="admin/manageblog"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <FaBlog />
              Manage Blogs
            </NavLink>
          </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink to="/">
              <FaHome className="mr-2" />
              Go Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminDashboard;
