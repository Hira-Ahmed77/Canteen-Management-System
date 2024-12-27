import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useMenu from "../../AxiosHook/useMenu";
import { useEffect, useState } from "react";

const OurMenu = () => {
  const [menu, refetch] = useMenu();
  const [menues, setMenues] = useState(menu);

  const handle1 = () => {};

  const handle2 = () => {};
  const handle3 = () => {};
  const handle4 = () => {};
  const handle5 = () => {};
  const handle6 = () => {};
  const handle7 = () => {};

  console.log("dddddddddddddddddddddd", menu);

  
  return (
    <div className="mt-5">
      <h1 className="text-center italic text-3xl text-[#FF9F0D]">
        Choose & pick
      </h1>
      <h1 className="text-5xl font-bold text-center">
        <span className="text-[#FF9F0D]">F</span>from Our Menu
      </h1>
      <div className="mt-4 gap-4 text-sm font-bold flex items-center justify-center">
        <button onClick={handle1}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Breakfast
          </a>
        </button>
        <button onClick={handle2}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Lunch
          </a>
        </button>
        <button onClick={handle3}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Dinner
          </a>
        </button>
        <button onClick={handle4}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Dessert
          </a>
        </button>
        <button onClick={handle5}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Drink
          </a>
        </button>
        <button onClick={handle6}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Snack
          </a>
        </button>
        <button onClick={handle7}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
          >
            Soups
          </a>
        </button>
      </div>
      <div className="flex items-center justify-start gap-2">
        <img
          src="https://i.ibb.co/c1347hY/unsplash-Lv174o7fn7-Y.png"
          alt=""
          className="ml-28 mr-28"
        />

        <div>
          {menues.map((me) => (
            <div className="my-3" key={me._id}>
              <div className="flex items-center gap-10">
                <div>
                  <img className="h-16 w-16" src={me.image} alt="" />
                </div>

                <div>
                  <h1 className="">{me.title}</h1>
                  <p className=" text-sm ">{me.short}</p>
                  <div className="flex items-center gap-3">
                    <h1 className="text-red-600 inline-block">${me.price}</h1>
                    <button className="flex items-center gap-2">
                      Add To Cart
                      <FaRegArrowAltCircleRight className="inline-block" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
