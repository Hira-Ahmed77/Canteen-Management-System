import { Link } from "react-router-dom";

const Cart = ({ data }) => {
  const { short, foodname, image, price, _id } = data;
  return (
    <div className="">
      <div className="card h-[600px]  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-[250px] w-full"
          />
        </figure>
        <div className="card-body ">
          <div className="flex justify-between items-center  ">
            <h2 className="card-title">{foodname}</h2>
            <h2 className="card-title text-red-700">${price}</h2>
          </div>
          <p>{short}</p>
          <div className="card-actions flex justify-between items-center">
            <button className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
              Delete
            </button>
            <Link to={`/menu/${_id}`}>
              <button className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
