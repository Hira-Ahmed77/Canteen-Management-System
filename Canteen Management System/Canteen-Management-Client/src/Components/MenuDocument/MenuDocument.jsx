import fish from "../../assets/icon/fish.png";
import group1 from "../../assets/icon/group1.png";
import group2 from "../../assets/icon/group2.png";
import group3 from "../../assets/icon/group3.png";
import group4 from "../../assets/icon/group4.png";

const MenuDocument = () => {
  return (
    <div className="relative h-[340px]">
      <img className="w-full h-full object-cover" src={fish} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div className="absolute top-1/4 w-full text-center text-white z-10">
        <div className="flex justify-evenly  items-center">
          <div>
            <img className="w-28" src={group1} alt="" />
            <h1 className="my-1">Professional Chefs</h1>
            <p className="font-extrabold">420</p>
          </div>
          <div>
            <img className="w-28" src={group2} alt="" />
            <h1 className="my-1">Items Of Food</h1>
            <p className="font-extrabold">320</p>
          </div>
          <div>
            <img className="w-28" src={group3} alt="" />
            <h1 className="my-1">Years Of Experience</h1>
            <p className="font-extrabold">30+</p>
          </div>
          <div>
            <img className="w-28" src={group4} alt="" />
            <h1 className="my-1">Happy Customers</h1>
            <p className="font-extrabold">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDocument;
