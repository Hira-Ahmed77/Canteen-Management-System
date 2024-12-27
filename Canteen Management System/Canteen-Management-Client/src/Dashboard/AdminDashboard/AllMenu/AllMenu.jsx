// const AllMenu = () => {
//   const [menu] = useMenu();
//   console.log("gggggggggggggg", menu);
//   return (
//     <div>
//       <div className="overflow-x-auto px-24 mt-10">
//         <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
//           <thead className="ltr:text-left rtl:text-right">
//             <tr>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Serial
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Title
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Category
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Price
//               </th>
//               <th className="px-4 py-2 text-start">Deleted</th>
//               <th className="px-4 py-2 text-start">Update</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {menu.map((menuData, index) => (
//               <tr key={menuData._id}>
//                 <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
//                   {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.title}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.category}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.price}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2">
//                   <a
//                     href="#"
//                     className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
//                   >
//                     Deleted
//                   </a>
//                 </td>
//                 <Link to={`/dashboard/admin/updateMenu/${_id}`}>
//                   <td className="whitespace-nowrap px-4 py-2">
//                     <a
//                       href="#"
//                       className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
//                     >
//                       Update
//                     </a>
//                   </td>
//                 </Link>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllMenu;

// deleted kaj colteche

// import { Link } from "react-router-dom";
// import useMenu from "../../../AxiosHook/useMenu";
// import Swal from "sweetalert2";

// const AllMenu = () => {
//   const [menu] = useMenu();

//   const handleDeleted = (id) => {
//     //make sure user is confirmed to deleted
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/menu/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);

//             if (data.deletedCount > 0) {
//               Swal.fire(
//                 "Deleted!",
//                 "Your Product has been Deleted.",
//                 "success"
//               );

//               // remove the user from the ui
//               const remainingUsers = menu.filter((user) => user?._id !== id);
//               setMyData(remainingUsers);
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="overflow-x-auto px-24 mt-10">
//         <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
//           <thead className="ltr:text-left rtl:text-right">
//             <tr>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Serial
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Title
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Category
//               </th>
//               <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
//                 Price
//               </th>
//               <th className="px-4 py-2 text-start">Deleted</th>
//               <th className="px-4 py-2 text-start">Update</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {menu.map((menuData, index) => (
//               <tr key={menuData._id}>
//                 <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
//                   {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.title}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.category}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                   {menuData.price}
//                 </td>

//                 <td className="whitespace-nowrap px-4 py-2">
//                   <button
//                     onClick={() => handleDeleted(menuData._id)}
//                     href="#"
//                     className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
//                   >
//                     Deleted
//                   </button>
//                 </td>

//                 <td className="whitespace-nowrap px-4 py-2">
//                   <Link to={`/dashboard/admin/updateMenu/${menuData._id}`}>
//                     <a
//                       href="#"
//                       className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
//                     >
//                       Update
//                     </a>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllMenu;

///

import { Link } from "react-router-dom";
import useMenu from "../../../AxiosHook/useMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";

const AllMenu = () => {
  const [menu, refetch, setMenu] = useMenu();

  const AxiosSecure = UseAxiosSecure();
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete blog",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`http://localhost:5000/menu/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAvailable = (id) => {
    console.log(id);

    AxiosSecure.patch(`/menus/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  return (
    <div>
      <div className="overflow-x-auto px-24 mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Serial
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Price
              </th>
              <th className="px-4 py-2 text-start">Deleted</th>
              <th className="px-4 py-2 text-start">Update</th>
              <th className="px-4 py-2 text-start">Availablity</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {menu.map((menuData, index) => (
              <tr key={menuData._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.price}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    onClick={() => handleDeleted(menuData._id)}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Delete
                  </button>
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={`/dashboard/admin/updateMenu/${menuData._id}`}>
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      Update
                    </button>
                  </Link>
                </td>

                {menuData.available === "none" ? (
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => handleAvailable(menuData._id)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      open for available
                    </button>
                  </td>
                ) : (
                  <td className="whitespace-nowrap px-4 py-2">
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      available
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMenu;
