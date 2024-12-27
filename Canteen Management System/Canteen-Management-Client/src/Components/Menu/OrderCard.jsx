import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const OrderCard = ({ item, index }) => {
  const { image, price, short, available, category, name, _id } = item;
  const [expandedCards, setExpandedCards] = useState(
    Array(item.length).fill(false)
  );

  const toggleCardVisibility = () => {
    const updatedExpandedCards = [...expandedCards];
    updatedExpandedCards[index] = !expandedCards[index];
    setExpandedCards(updatedExpandedCards);
  };

  return (
    <div className="h-full">
      <div className="card card-compact bg-base-100 shadow-lg flex flex-col justify-between">
        <figure>
          <img
            className="h-[240px] w-full object-cover"
            src={image}
            alt="image"
          />
        </figure>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 className="card-title">{name}</h2>
            <div className="flex gap-6 items-center justify-between my-3">
              <div>
                <p className="uppercase py-1 px-3 bg-[#ff9f0d] rounded-lg text-white">
                  {category}
                </p>
              </div>
              <div className="flex items-center">
                <p className="uppercase text-[#ff9f0d] font-semibold">
                  Price: {price}
                </p>
                <span>
                  <FaBangladeshiTakaSign className="text-[#ff9f0d] font-semibold" />
                </span>
              </div>
            </div>
            <p className="my-4 text-justify">
              {expandedCards[index] ? short : `${short.slice(0, 80)}...`}
              {short.length > 80 && (
                <button
                  className="text-blue-500 underline ml-2"
                  onClick={toggleCardVisibility}
                >
                  {expandedCards[index] ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
          </div>
          <div className="card-actions mt-auto justify-center">
            {available === "none" ? (
              <button
                disabled
                className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
              >
                Add to Cart
              </button>
            ) : (
              <Link to={`/menu/${_id}`}>
                <button
                  disabled={available === "none"}
                  className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
                >
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
