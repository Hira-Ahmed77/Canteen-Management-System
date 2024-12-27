import { Link } from "react-router-dom";
import ShopBanner from "../../Hook/ShopBanner";
const ShopDetails = () => {
  return (
    <div>
      <ShopBanner Heading={"404 Error"} SubHeading={"Home > 404"}></ShopBanner>

      <div className="text-center leading-10	">
        <h1 className=" text-[#FF9F0D] text-8xl font-bold">404</h1>
        <h1 className=" text-2xl font-semibold">
          Oops! Look likes something going wrong
        </h1>

        <p className="w-96 mx-auto">
          Page Cannot be found! we’ll have it figured out in no time. Menwhile,
          cheek out these fresh ideas:
        </p>
        <button className="bg-[#FF9F0D] text-white p-2 rounded-md">
          <Link to={'/'}>Go to home</Link>
        </button>

        {/* <div
          style={{
            margin: "50px",
            width: "80px",
            height: "80px",
            backgroundColor: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotate(50deg)",
          }}
        >
          <div style={{ transform: "rotate(-50deg)" }}>
            <h2>1</h2>
          </div>
        </div> */}

        {/* <div
          className="m-12 w-20 h-20 bg-yellow-300 flex justify-center items-center"
          style={{ transform: "rotate(50deg)" }}
        >
          <div className="transform" style={{ transform: "rotate(-50deg)" }}>
            <h2 className="text-lg">1</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ShopDetails;
