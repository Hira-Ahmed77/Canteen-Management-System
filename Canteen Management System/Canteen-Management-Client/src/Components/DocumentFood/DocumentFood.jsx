import fish from "../../assets/icon/fish.png";
import group1 from "../../assets/icon/group1.png";
import group2 from "../../assets/icon/group2.png";
import group3 from "../../assets/icon/group3.png";
import group4 from "../../assets/icon/group4.png";

const DocumentFood = () => {
  return (
    <div className="relative h-[340px] md:h-[340px] lg:h-[340px] xl:h-[340px] 2xl:mt-60 xl:mt-10 md:mt-10 lg:mt-10 mt-10">
      <img className="w-full h-full object-cover" src={fish} alt="Fish" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div className="absolute top-1/4 w-full text-center text-white z-10">
        <div className="flex flex-wrap justify-evenly items-center">
          <div className="m-2">
            <img
              className="w-16 md:w-24 lg:w-28"
              src={group1}
              alt="Professional Chefs"
            />
            <h1 className="my-1 text-xs md:text-sm lg:text-base">
              Professional Chefs
            </h1>
            <p className="font-extrabold text-sm md:text-lg lg:text-xl">420</p>
          </div>
          <div className="m-2">
            <img
              className="w-16 md:w-24 lg:w-28"
              src={group2}
              alt="Items Of Food"
            />
            <h1 className="my-1 text-xs md:text-sm lg:text-base">
              Items Of Food
            </h1>
            <p className="font-extrabold text-sm md:text-lg lg:text-xl">320</p>
          </div>
          <div className="m-2">
            <img
              className="w-16 md:w-24 lg:w-28"
              src={group3}
              alt="Years Of Experience"
            />
            <h1 className="my-1 text-xs md:text-sm lg:text-base">
              Years Of Experience
            </h1>
            <p className="font-extrabold text-sm md:text-lg lg:text-xl">30+</p>
          </div>
          <div className="m-2">
            <img
              className="w-16 md:w-24 lg:w-28"
              src={group4}
              alt="Happy Customers"
            />
            <h1 className="my-1 text-xs md:text-sm lg:text-base">
              Happy Customers
            </h1>
            <p className="font-extrabold text-sm md:text-lg lg:text-xl">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentFood;
