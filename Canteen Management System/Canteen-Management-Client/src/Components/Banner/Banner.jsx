// import { Link } from "react-router-dom";
// import img1 from "../../assets/Banner-1.png";

// const Banner = () => {
//   return (
//     <div className="mt-30 grid grid-cols-1 md:grid-cols-2  items-center justify-center mx-auto">
//       <div className="">
//         <h2 className=" md:text-6xl text-4xl font-bold font-sans leading-normal text-center md:text-start"
         
//         >
//           <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
//           food Quality
//         </h2>
//         <p className="text-base text-center lg:text-left py-5">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
//           pharetra dictum neque massa congue
//         </p>
//         <button className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
//           <Link to={"/shop"}>See Menu</Link>
//         </button>
//       </div>
//       <div className="">
//         <img src={img1} alt="" className="w-full" />
//       </div>
//     </div>
//   );
// };

// export default Banner;


//
import { Link } from "react-router-dom";
import img1 from "../../assets/Banner-1.png";

const Banner = () => {
  return (
    <div className="mt-30 grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto max-w-[1840px]">
      <div className="text-center md:text-left">
        <h2 className="md:text-6xl text-4xl font-bold font-sans leading-normal">
          <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
          food Quality
        </h2>
        <p className="text-base py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
            <Link to={"/shop"}>See Menu</Link>
          </button>
        </div>
      </div>
      <div className="">
        <img src={img1} alt="Food Banner" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
