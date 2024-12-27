import { FaAngleRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useMenu from "../../AxiosHook/useMenu";
import { useState } from "react";

const OurShop = () => {
  const [allFoodItem] = useMenu();

  const [expandedCards, setExpandedCards] = useState(
    Array(allFoodItem.length).fill(false)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleCardVisibility = (index) => {
    const updatedExpandedCards = [...expandedCards];
    updatedExpandedCards[index] = !updatedExpandedCards[index];
    setExpandedCards(updatedExpandedCards);
  };

  const filteredItems = allFoodItem.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = selectedCategory
    ? filteredItems.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : filteredItems;

  return (
    <div className="mt-[66px] overflow-hidden">
      <div
        className="hero object-cover h-[300px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hcchtgh/unsplash-4ycv3-Ky1-ZZU.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Shop</h1>

            <div className=" flex gap-1 justify-center items-center">
              <Link to={"/"}>Home</Link>
              <FaAngleRight className="mt-1" />
              <button className=" text-[#ff9f0d]">Shop</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-16 max-w-[1840px] mx-auto">
        {/* left side content */}

        <div className="flex flex-col lg:flex-row gap-3 mt-20 mb-10">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-3 h-max">
            {filteredByCategory.map((allItem, index) => (
              <div key={allItem._id}>
                <div className="card card-compact bg-base-100 shadow-lg flex flex-col justify-between">
                  <figure>
                    <img
                      className=" h-[200px] w-full"
                      src={allItem.image}
                      alt="image"
                    />
                  </figure>
                  <div className=" p-4">
                    <h2 className="card-title">{allItem.name} </h2>
                    <div className=" flex gap-6 items-center justify-between my-3">
                      <div>
                        <p className=" uppercase  py-1 px-3 bg-[#ff9f0d] rounded-lg text-white">
                          {allItem.category}
                        </p>
                      </div>
                      <p className=" uppercase text-[#ff9f0d] font-semibold">
                        Price: {allItem.price}
                      </p>
                    </div>

                    <p className="my-4 text-justify">
                      {expandedCards[index]
                        ? allItem.short
                        : `${allItem.short.slice(0, 80)}...`}
                      {allItem.short.length > 80 && (
                        <button
                          className="text-blue-500 underline ml-2"
                          onClick={() => toggleCardVisibility(index)}
                        >
                          {expandedCards[index] ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </p>
                    <div className="card-actions mt-auto justify-center">
            {allItem.available === "none" ? (
              <button
                disabled
                className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
              >
                Add to Cart
              </button>
            ) : (
              <Link to={`/menu/${allItem._id}`}>
                <button
                  disabled={allItem.available === "none"}
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
            ))}
          </div>

          <div className=" mt-10 md:mt-10 lg:mt-0 xl:mt-0 2xl:mt-0">
            <div>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-3/5 rounded-l-lg placeholder-[#828282] p-2 sm:w-2/3 text-sm bg-[#ff9f0d1a]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="w-3/5 p-2 font-semibold rounded-r-lg sm:w-1/3 bg-[#FF9F0D] dark:bg-[#FF9F0D] text-white"
                >
                  <IoIosSearch className="mx-auto font-bold w-6 h-6" />
                </button>
              </div>
            </div>

            <div className=" mt-5">
              <h6 className="text-[#828282] text-sm font-bold">Category</h6>

              <select
                className="text-[#828282] border p-2 rounded-lg mt-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Category</option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Dessert">Dessert</option>
                <option value="Drink">Drink</option>
                <option value="Snack">Snack</option>
                <option value="Soup">Soup</option>
              </select>

              <div className="mt-5">
                <div
                  className="hero h-[250px] w-[140px]"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/LrGn73G/Rectangle-8879.png)",
                  }}
                >
                  <div className=""></div>
                  <div className="hero-content  text-neutral-content">
                    <div className="max-w-md">
                      <p className=" font-semibold">Perfect Taste</p>
                      <p className=" font-semibold">Classic Restaurant</p>
                      <span className=" text-[#ff9f0d] font-medium">
                        45.00$
                      </span>

                      <div className=" flex items-center gap-2 pt-[110px]">
                        <button className=" font-semibold">Shop Now</button>
                        <FaRegArrowAltCircleRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-2">
                <h2 className="text-[#828282]text-sm font-bold">
                  Product Menu
                </h2>
                <div>
                  <div className=" flex gap-8 mt-2 text-xs text-[#828282] -mr-36">
                    <Link to={"/"}>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="border-b-2  hover:text-[#FF9F0D] hover:border-[#FF9F0D] border-transparent"
                      >
                        Home
                      </a>
                    </Link>

                    <Link to={"/about"}>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="border-b-2  hover:text-[#FF9F0D] hover:border-[#FF9F0D] border-transparent"
                      >
                        About
                      </a>
                    </Link>
                    <Link to={"/shop"}>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="border-b-2  hover:text-[#FF9F0D] hover:border-[#FF9F0D] border-transparent"
                      >
                        Shop
                      </a>
                    </Link>
                  </div>

                  <div className=" flex gap-8 my-2 text-xs text-[#828282] ">
                    <Link to={"/blog"}>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="border-b-2  hover:text-[#FF9F0D] hover:border-[#FF9F0D] border-transparent"
                      >
                        Blog
                      </a>
                    </Link>
                    <Link to={"/orders"}>
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        className="border-b-2  hover:text-[#FF9F0D] hover:border-[#FF9F0D] border-transparent"
                      >
                        My Cart
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
