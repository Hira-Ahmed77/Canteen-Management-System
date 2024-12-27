import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

import UseAdmin from "../../AxiosHook/UseAdmin";
const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin();
  console.log(isAdmin);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("LogOut Successfully");
      })
      .catch(() => {
        toast.error("Authentication failed. Please try again");
      });
    navigate("/");
  };

  return (
    <div className="navbar bg-orange-600 text-white bg-opacity-80 backdrop-blur-lg p-2 shadow-lg xl:px-20 2xl:px-72  lg:px-16 md:px-10 px-5 fixed z-50 top-0 border-b ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-white text-black mt-3 z-[1] p-2 shadow rounded-box w-52 "
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>

            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>

            {user?.email === "employee@gmail.com" && (
              <li>
                <NavLink to={"/allOrders"}>All Orders</NavLink>
              </li>
            )}

            {user?.email && (
              <li>
                {isAdmin ? (
                  <NavLink to={"/dashboard/admin/home"}>Dashboard</NavLink>
                ) : (
                  <NavLink to={"/orders"}>Orders</NavLink>
                )}
              </li>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img
              className="lg:w-[150px] md:w-[120px] w-[100px]"
              src="https://i.ibb.co/8n3xxBS/Green-and-Black-Simple-Clean-Vegan-Food-Logo-1.png"
              alt="canteen img"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 flex gap-2">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/menu/drink"}>Menu</NavLink>
          </li> */}
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          {user?.email === "employee@gmail.com" ? (
            <li>
              <NavLink to={"/allOrders"}>All Orders</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/orders"}>My Cart</NavLink>
            </li>
          )}

          {user?.email && (
            <li>
              {isAdmin && (
                <NavLink to={"/dashboard/admin/home"}>Dashboard</NavLink>
              )}
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-2">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme == "light" ? false : true}
          />
          <svg
            className="swap-on fill-current lg:w-8 md:w-8 w-8 lg:h-10 md:h-10 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current lg:w-8 md:w-8 w-8 lg:h-10 md:h-10 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm text-black btn-ghost">
                  {user.displayName}
                </button>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm text-black btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}

        <div className="hidden md:block">
          <fieldset className="w-full space-y-1 dark:text-gray-100 text-black ml-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </span>

              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-[130px] pl-7 rounded-full outline-[#ff9f0d] px-2 py-1 dark:bg-black dark:text-white text-black "
              />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
