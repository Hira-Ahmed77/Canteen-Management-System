import UseAxiosPublic from "../../../Axios/UseAxiosPublic";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const AxiosPublic = UseAxiosPublic();
  const AxiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    const img = { image: data.image[0] };
    const res = await AxiosPublic.post(image_hosting_api, img, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const name = data.name;
    const short = data.short;
    const price = data.price;
    const category = data.category;

    const image = res.data.data.display_url;
    console.log(name, image, short, price, category);
    const body = { name, image, short, price, category };

    AxiosSecure.post("/menu", body).then((res) => {
      console.log(res.data);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Menu has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className=" px-20 text-black mt-20">
      <div className=" text-center  mb-8">
        <h2 className=" text-2xl font-bold">Add Menu</h2>
      </div>

      <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            className="input  input-bordered  text-xs font-normal "
            required
          />

          <input
            {...register("image")}
            type="file"
            placeholder="image"
            className="file-input file-input-bordered w-full my-5"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <input
            {...register("price", { required: true })}
            type="text"
            placeholder="Price"
            className="input  input-bordered  text-xs font-normal "
            required
          />

          <select
            {...register("category", { required: true })}
            className="py-3 px-2 text-black rounded-r-lg "
            name="category"
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
          className="input  input-bordered w-full mt-5 text-xs font-normal "
          required
        />

        <input
          type="submit"
          value="Submit"
          className="btn btn-block mt-5 bg-[#003a90] hover:bg-[#003481] text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
