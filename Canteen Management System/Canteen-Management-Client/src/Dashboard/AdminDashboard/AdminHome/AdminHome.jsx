import { RiExchangeFundsFill } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import Charts from "./charts/Charts";
import Piechart from "./charts/Piechart";
import useAllOrder from "../../../AxiosHook/useAllOrder";
import { useEffect, useState } from "react";
import UseUsers from "../../../AxiosFetch/UseUsers";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const AdminHome = () => {
  const [order] = useAllOrder();
  const [users] = UseUsers();
  const userRoleUsers = users.filter((user) => user.role === "user");
  //
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice);
  
  useEffect(() => {
    // Calculate total price whenever items change
    let totalPrice = 0;
    order.forEach((item) => {
      totalPrice += parseInt(item.price);
    });
    setTotalPrice(totalPrice);
  }, [order]);
  return (
    <>
      <div className="px-10 ml-10 mt-20">
        <div className=" flex gap-6">
          <div className=" bg-[#006f47] w-[200px] p-5 flex items-center gap-3 rounded-lg">
            <div>
              <div className="w-12 h-12 bg-[#dd3fe0] rounded-full flex items-center justify-center">
                <RiExchangeFundsFill className="text-2xl text-white" />
              </div>
            </div>
            <div className=" text-white">
              <div className="flex items-center">
                <span>
                  <FaBangladeshiTakaSign className=" text-white font-semibold" />
                </span>
                <h2>{totalPrice}</h2>
              </div>

              <h3>Total Sell</h3>
            </div>
          </div>

          <div className=" bg-[#006f47] w-[220px] p-5 flex items-center gap-3 rounded-lg">
            <div>
              <div className="w-12 h-12 bg-[#51bcd3] rounded-full flex items-center justify-center">
                <LuUsers className="text-2xl text-white" />
              </div>
            </div>
            <div className=" text-white">
              <h2>{userRoleUsers.length}</h2>
              <h3>Total Customers</h3>
            </div>
          </div>
        </div>

        {/* Your remaining code */}
        <div className="flex gap-10 p-10 rounded-md">
          <div>
            <Charts />
          </div>
          <div>
            <Piechart />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
