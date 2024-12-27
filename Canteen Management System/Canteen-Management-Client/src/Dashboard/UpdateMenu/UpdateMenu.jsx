import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateMenu = () => {
  const menuData = useLoaderData();

  const { _id, name, short, price, category } = menuData;
  console.log(menuData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const AxiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const img = { image: data.image[0] };
      const res = await AxiosPublic.post(image_hosting_api, img, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const updatedImage = res.data.data.display_url;
      console.log("Updated Image URL:", updatedImage);

      const updatedData = {
        name: data.name,
        short: data.short,
        price: data.price,
        category: data.category,
        image: updatedImage,
      };

      fetch(`http://localhost:5000/menu/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.matchedCount > 0) {
            Swal.fire({
              title: "Success",
              text: "Product Update successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update product. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div>
      <div className="px-20 text-black mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Update Menu</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Title"
              className="input input-bordered text-xs font-normal"
              defaultValue={name}
              required
            />

            <input
              {...register("image")}
              type="file"
              placeholder="Image"
              className="file-input file-input-bordered w-full my-5"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Price"
              className="input input-bordered text-xs font-normal"
              defaultValue={price}
              required
            />

            <select
              {...register("category", { required: true })}
              className="py-3 px-2 rounded-r-lg"
              name="category"
              defaultValue={category}
            >
              <option value="salad"> Salad</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
              <option value="snack">Snack</option>
              <option value="soup">Soup</option>
            </select>
          </div>

          <input
            {...register("short", { required: true })}
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full mt-5 text-xs font-normal"
            defaultValue={short}
            required
          />

          <input
            type="submit"
            value="Submit"
            className="btn btn-block mt-5 bg-[#003a90] hover:bg-[#003481] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;
