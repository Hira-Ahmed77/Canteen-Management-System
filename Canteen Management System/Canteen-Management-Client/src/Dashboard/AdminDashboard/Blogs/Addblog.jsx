// const Addblog = () => {

//   return (

//     <div className="text-black  min-h-screen  flex items-center justify-center  px-20 mt-20 overflow-x-hidden">
//     <div className="p-8 rounded-lg shadow-xl w-96 bg-white">
//       <h2 className="text-2xl font-bold mb-4">Add your Blogs</h2>
//       <form  action="#" method="post">
//         <label htmlFor="title" className="block font-bold mb-1">
//           Title:
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           className="w-full text-black p-2 mb-4 border rounded"
//           required
//           // value={title}
//           // onChange={(e) => setTitle(e.target.value)}
//         />

//         <label htmlFor="description" className="block font-bold mb-1">
//           Description:
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           rows="4"
//           className="w-full text-black p-2 mb-4 border rounded"
//           required
//           // value={description}
//           // onChange={(e) => setDescription(e.target.value)}
//         ></textarea>

//         <label htmlFor="image" className="block font-bold mb-1">
//           Image Upload:
//         </label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           // onChange={handleImageChange}
//           className="w-full p-2 mb-4 border rounded"
//           accept="image/*"
//           required
//         />

//         <button
//           type="submit"
//            className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>

//   );
// };

// export default Addblog;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UseAxiosPublic from "../../../Axios/UseAxiosPublic";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = UseAxiosPublic();
  const AxiosSecure = UseAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);

    // Upload image
    const images = { image: image };
    const res = await AxiosPublic.post(image_hosting_api, images, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data.data.display_url;
    console.log(photo);

    // const date = new Date();
    // const blogInfo = { title, description, photo, date };
    const date = new Date();
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const blogInfo = { title, description, photo, date: formattedDate };
    console.log(blogInfo);

    AxiosSecure.post("/blogs", blogInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    // Post blog to the server
    // AxiosSecure.post("/blogs", blogInfo).then((res) => {
    //   console.log(res.data);
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Blog has been saved",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // });

    // Reset the form
    setTitle("");
    setDescription("");

    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center p-10 overflow-x-hidden">
      <div className="bg-white  text-black p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Add your Blogs</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="block font-bold mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="image" className="block font-bold mb-1">
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            accept="image/*"
            required
          />

          <button
            type="submit"
            className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
