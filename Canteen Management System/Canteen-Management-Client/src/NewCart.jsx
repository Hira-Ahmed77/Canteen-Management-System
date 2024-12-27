// import { useLoaderData, useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaAngleRight } from "react-icons/fa";
// import { AuthContext } from "./Components/Provider/AuthProvider";
// import UseAxiosPublic from "./Axios/UseAxiosPublic";
// import UseCart from "./AxiosHook/UseCart";

// const NewCart = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const newCart = useLoaderData();
//   const { _id, price, category, name } = newCart;

//   const [defaultValues, setDefaultValues] = useState({
//     name: user?.displayName || "",
//     address: "Dhaka",
//     price: newCart?.price,
//     postcode: "5000",
//     country: "Bangladesh",
//     phonenumber: user?.phoneNumber || "01712345678",
//   });

//   const handleOrder = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const address = form.address.value;
//     const price = form.price.value;
//     const postcode = form.postcode.value;
//     const country = form.country.value;
//     const phonenumber = form.phonenumber.value;

//     const product = {
//       name,
//       address,
//       price,
//       postcode,
//       country,
//       phonenumber,
//     };

//     console.log(product);

//     fetch(`http://localhost:5000/order/${id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         window.location.replace(data.url);
//         console.log(data);
//         data.productId = id;

//         setDefaultValues({
//           name: data.name,
//           address: data.address,
//           price: data.price,
//           postcode: data.postcode,
//           country: data.country,
//           phonenumber: data.phonenumber,
//         });

//         if (data.insertedId) {
//           Swal.fire({
//             title: "success",
//             text: "Payment Process Successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };

//   const [carts, refetch] = UseCart();
//   const AxiosPublic = UseAxiosPublic();

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to delete this item from the cart?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         AxiosPublic.delete(`/carts/${id}`).then((res) => {
//           refetch();
//           if (res.data.deletedCount > 0) {
//             Swal.fire({
//               title: "Deleted",
//               text: "Your cart item has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };

//   const data = {
//     id: _id,
//     price,
//     category,
//     name,
//     email: user?.email,
//   };

//   const handleadd = () => {
//     AxiosPublic.post(`/orders`, data).then((res) => {
//       console.log(res.data);
//     });

//     AxiosPublic.patch(`/menu/${_id}`).then((res) => {
//       console.log(res.data);
//       refetch();
//     });
//   };

//   return (
//     <div className="mt-28">
//       <div className="p-2 sm:p-4 dark:text-gray-100">
//         <h2 className="mb-4 text-6xl text-center font-semibold leading-tight">
//           Invoices
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-xs">
//             <thead className="dark:bg-gray-700">
//               <tr>
//                 <th className="p-3 text-center">ID</th>
//                 <th className="p-3 text-center">Name</th>
//                 <th className="p-3 text-center">Category</th>
//                 <th className="p-3 text-center">Price</th>
//                 <th className="p-3 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
//                 <td className="p-3 text-center">{_id}</td>
//                 <td className="p-3 text-center">{name}</td>
//                 <td className="p-3 text-center">{category}</td>
//                 <td className="p-3 text-center">{price}</td>
//                 <td className="p-3 text-center">
//                   <button onClick={() => handleDelete(_id)}>
//                     <RiDeleteBin6Line />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="mt-20 w-3/4 mx-auto flex gap-2 mb-20">
//         <div className="w-2/3 grid">
//           <h2 className="font-bold">Shipping Address</h2>
//           <form onSubmit={handleOrder}>
//             <div className="flex gap-2 w-full py-2">
//               <div className="w-1/2">
//                 <h2>Full Name</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   defaultValue={user?.displayName}
//                   required
//                 />
//               </div>
//               <div className="w-1/2">
//                 <h2>Email Address</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   defaultValue={user?.email}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2 py-2">
//               <div className="w-1/2">
//                 <h2>Phone Number</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="text"
//                   name="phonenumber"
//                   pattern="[0-9]{11}"
//                   placeholder="Phone Number"
//                   defaultValue={defaultValues?.phonenumber}
//                   required
//                 />
//               </div>
//               <div className="w-1/2">
//                 <h2>Country</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="text"
//                   name="country"
//                   placeholder="Country"
//                   defaultValue={defaultValues?.country}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2 py-2">
//               <div className="w-1/2">
//                 <h2>Address</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   defaultValue={defaultValues?.address}
//                 />
//               </div>
//               <div className="w-1/2">
//                 <h2>Zip Code</h2>
//                 <input
//                   className="border w-full p-2"
//                   type="text"
//                   name="postcode"
//                   pattern="[0-9]{4}"
//                   placeholder="Zip Code"
//                   defaultValue={defaultValues?.postcode}
//                   required
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="label">
//                   <span className="label-text">Price</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="price"
//                   defaultValue={defaultValues.price}
//                   className="input input-bordered "
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <input type="checkbox" name="billingSameAsShipping" />
//               <label>Same as Shipping Address</label>
//             </div>
//             <div className="flex gap-2 py-2">
//               <button
//                 onClick={handleadd}
//                 className="border p-2 bg-[#ff9f0d] flex items-center"
//               >
//                 Proceed to Shipping <FaAngleRight />
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="">
//           <div className="flex flex-col w-full p-6 space-y-4 divide-y dark:divide-gray-700">
//             <h2 className="text-2xl font-semibold">Your Order</h2>
//             <div className="pt-4 space-y-2">
//               <div className="flex justify-between">
//                 <span>Total Price</span>
//                 <span>{price}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Discount (0%)</span>
//                 <span>0</span>
//               </div>
//             </div>
//             <div className="pt-4 space-y-2">
//               <div className="flex justify-between">
//                 <span>Total</span>
//                 <span>{price}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewCart;

//
import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "./Components/Provider/AuthProvider";
import UseAxiosPublic from "./Axios/UseAxiosPublic";
import UseCart from "./AxiosHook/UseCart";

const NewCart = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const newCart = useLoaderData();
  const { _id, price, category, name } = newCart;

  const [defaultValues, setDefaultValues] = useState({
    name: user?.displayName || "",
    address: "Dhaka",
    price: newCart?.price,
    postcode: "5000",
    country: "Bangladesh",
    phonenumber: user?.phoneNumber || "01712345678",
  });

  const handleOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const price = form.price.value;
    const postcode = form.postcode.value;
    const country = form.country.value;
    const phonenumber = form.phonenumber.value;

    const product = {
      name,
      address,
      price,
      postcode,
      country,
      phonenumber,
    };

    console.log(product);

    fetch(`http://localhost:5000/order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
        data.productId = id;

        setDefaultValues({
          name: data.name,
          address: data.address,
          price: data.price,
          postcode: data.postcode,
          country: data.country,
          phonenumber: data.phonenumber,
        });

        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Payment Process Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const [carts, refetch] = UseCart();
  const AxiosPublic = UseAxiosPublic();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/carts/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted",
              text: "Your cart item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const data = {
    id: _id,
    price,
    category,
    name,
    email: user?.email,
  };

  const handleadd = () => {
    AxiosPublic.post(`/orders`, data).then((res) => {
      console.log(res.data);
    });

    AxiosPublic.patch(`/menu/${_id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <div className="p-2 sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl sm:text-4xl md:text-6xl text-center font-semibold leading-tight">
          Invoices
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm md:text-base">
            <thead className="dark:bg-gray-700">
              <tr>
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Category</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3 text-center">{_id}</td>
                <td className="p-3 text-center">{name}</td>
                <td className="p-3 text-center">{category}</td>
                <td className="p-3 text-center">{price}</td>
                <td className="p-3 text-center">
                  <button onClick={() => handleDelete(_id)}>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-20 w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-2 mb-20">
        <div className="w-full lg:w-2/3 grid">
          <h2 className="font-bold">Shipping Address</h2>
          <form onSubmit={handleOrder}>
            <div className="flex flex-col sm:flex-row gap-2 w-full py-2">
              <div className="w-full sm:w-1/2">
                <h2>Full Name</h2>
                <input
                  className="border w-full p-2"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  defaultValue={user?.displayName}
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <h2>Email Address</h2>
                <input
                  className="border w-full p-2"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  defaultValue={user?.email}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 py-2">
              <div className="w-full sm:w-1/2">
                <h2>Phone Number</h2>
                <input
                  className="border w-full p-2"
                  type="text"
                  name="phonenumber"
                  pattern="[0-9]{11}"
                  placeholder="Phone Number"
                  defaultValue={defaultValues?.phonenumber}
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <h2>Country</h2>
                <input
                  className="border w-full p-2"
                  type="text"
                  name="country"
                  placeholder="Country"
                  defaultValue={defaultValues?.country}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 py-2">
              <div className="w-full sm:w-1/2">
                <h2>Address</h2>
                <input
                  className="border w-full p-2"
                  type="text"
                  name="address"
                  placeholder="Address"
                  defaultValue={defaultValues?.address}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <h2>Zip Code</h2>
                <input
                  className="border w-full p-2"
                  type="text"
                  name="postcode"
                  pattern="[0-9]{4}"
                  placeholder="Zip Code"
                  defaultValue={defaultValues?.postcode}
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 py-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={defaultValues.price}
                className="input input-bordered w-full p-2"
                required
              />
            </div>
            <div className="flex gap-2 py-2">
              <input type="checkbox" name="billingSameAsShipping" />
              <label>Same as Shipping Address</label>
            </div>
            <div className="flex gap-2 py-2">
              <button
                onClick={handleadd}
                className="border p-2 bg-[#ff9f0d] flex items-center"
              >
                Proceed to Shipping <FaAngleRight />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="flex flex-col w-full p-6 space-y-4 divide-y dark:divide-gray-700">
            <h2 className="text-2xl font-semibold">Your Order</h2>
            <div className="pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total Price</span>
                <span>{price}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (0%)</span>
                <span>0</span>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
