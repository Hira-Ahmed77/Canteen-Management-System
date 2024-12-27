import { FaHamburger } from "react-icons/fa";
import { LuCookie } from "react-icons/lu";
import { IoWine } from "react-icons/io5";

const TesteFood = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center mx-auto py-10 px-4 md:px-10 lg:px-20 gap-10 md:gap-20">
      <div className="flex-1 grid grid-cols-6 md:grid-cols-12 gap-2 h-auto md:h-[500px]">
        <img
          src="https://i.ibb.co/1ZBhVL3/food1.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-2 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/WK0Y5xj/food2.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-2 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/1RbWwHD/food3.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-3 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/T2JNLJZ/food6.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-2 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/TTDdmVz/food5.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-2 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/0BhQNSX/food4.png"
          alt=""
          className="col-span-3 md:col-span-4 row-span-3 w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/n6ZbnCC/fish.png"
          alt=""
          className="col-span-6 md:col-span-8 row-span-2 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="italic text-xl text-[#FF9F0D]">Why Choose Us</h1>
        <h1 className="text-4xl md:text-5xl font-bold w-full md:w-[500px]">
          <span className="inline-block text-[#FF9F0D]">Ex</span>traordinary
          Taste and Experience
        </h1>
        <br />
        <br />
        <p className="leading-7 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          <br /> diam pellentesque bibendum non dui volutpat fringilla bibendum.
          <br /> Urna, elit augue urna, vitae feugiat pretium donec id
          elementum.
          <br /> Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
          sit eu <br /> velit in consequat.
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-3">
          <div className="bg-orange-500 text-white text-5xl p-2 rounded-md">
            <FaHamburger />
          </div>
          <div className="bg-orange-500 text-white text-5xl p-2 rounded-md">
            <LuCookie />
          </div>
          <div className="bg-orange-500 text-white text-5xl p-2 rounded-md">
            <IoWine />
          </div>
        </div>
        <div className="py-5">
          <div className="bg-amber-500 w-2 flex">
            <div className="px-6">
              <h1 className="text-[#FF9F0D] text-4xl font-bold">30+</h1>
            </div>
            <div>
              <h1>
                Years of <span className="font-bold">Experienced</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesteFood;
