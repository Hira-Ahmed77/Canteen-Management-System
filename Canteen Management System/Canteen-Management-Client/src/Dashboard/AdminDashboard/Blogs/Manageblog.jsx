// import React, { useState } from "react";
// import img1 from "../../../assets/menu/blog-3.png";

// export default function Manageblog() {
//   const [showFullContent, setShowFullContent] = useState(false);

//   const content = `Welcome to the Snacks Blog! Whether you're a seasoned snack enthusiast or occasional treat lover, our dedicated community has something for everyone. From savory to sweet, we've got all your cravings covered. Join us as we explore the world of snacking, share recipes, and discover new favorites together. Let's embark on this flavorful journey and uncover the best snacks from around the globe. So grab a snack, pull up a chair, and indulge with us - you won't want to miss out on a single bite!`;

//   const handleClick = () => {
//     setShowFullContent(!showFullContent);
//   };

//   return (
//     <div className="bg-white mt-10 border rounded-md shadow-lg">
//       <a
//         rel="noopener noreferrer"
//         href="#"
//         className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-gray-900"
//       >
//         <img
//           src={img1}
//           alt=""
//           className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
//         />
//         <div className="p-6 space-y-2 lg:col-span-5">
//           <h3 className="text-2xl font-semibold sm:text-4xl ">
//             Snacks Blog: Ultimate Destination for Snack Fans!
//           </h3>
//           <span className="text-xs dark:text-gray-400">February 19, 2024</span>
//           <p>
//             {showFullContent
//               ? content
//               : content.split(" ").slice(0, 50).join(" ")}
//             {content.length > 50 && (
//               <button onClick={handleClick} className="text-blue-500 underline">
//                 {showFullContent ? "Read Less" : "Read More"}
//               </button>
//             )}
//           </p>
//           <div>
//             <button className="text-black">Update</button>
//             <button>Delete</button>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }

// import { Helmet } from "react-helmet-async";
import UseBlogs from "../../../AxiosFetch/UseBlogs";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";
import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";

const ManageBlogs = () => {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [blogs, refetch] = UseBlogs();
  const AxiosSecure = UseAxiosSecure();

  const toggleContent = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowFullContent1(!showFullContent1);
        break;
      default:
        break;
    }
  };

  const renderContent = (content, showFullContent) => {
    const maxLength = 150;
    if (showFullContent) {
      return content;
    }
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  const handleDelete = (id) => {
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
        AxiosSecure.delete(`/blogs/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="text-white p-4 lg:px-28 md:px-10 px-5 mt-10">
      {blogs.map((blog) => (
        
          <div
            key={blog._id}
            className="border p-5 border-gray-300 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-3"
          >
            <img className=" border-2 rounded-lg" src={blog.photo} alt="" />
            <div className="mt-4">
              <h3 className="text-xl text-black font-semibold">{blog.title}</h3>
              <p className="mt-2 text-black">
                {renderContent(blog.description, showFullContent1)}
                <button
                  onClick={() => toggleContent(1)}
                  className="text-blue-500 hover:underline"
                >
                  {showFullContent1 ? "Read Less" : `Read More`}{" "}
                  {<MdReadMore className="inline-block" />}
                </button>
              </p>
              <div className="">
                <div className="flex gap-5 items-center mt-4 ">
                  <Link to={`/dashboard/blogs/${blog._id}`}>
                    <button className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
                      <a href="">Update</a>
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
                  >
                    <a>Delete</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
       
      ))}
    </div>
  );
};

export default ManageBlogs;
