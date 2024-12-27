import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import ShopBanner from "../../Hook/ShopBanner";
import { GoDotFill } from "react-icons/go";
import { IoGitCompare } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const ShopDetails = () => {
  return (
    <div>
      <ShopBanner
        Heading={"Shop Details"}
        SubHeading={"Home > Shop Details"}
      ></ShopBanner>
      {/* ----------------------------------------------------------
            --------------------------------------------------------- */}
      <section className="px-16">
        <div className="grid lg:grid-cols-2 justify-center gap-8 items-center my-10">
          <div className="flex justify-center items-center gap-5">
            <div className="col-span-1 space-y-2">
              <img
                className="h-28 "
                style={{ maxWidth: "100%" }}
                src="/src/assets/bestfood.png"
                alt=""
              />
              <img
                className="h-28"
                style={{ maxWidth: "100%" }}
                src="/src/assets/bestfood.png"
                alt=""
              />
              <img
                className="h-28 "
                style={{ maxWidth: "100%" }}
                src="/src/assets/bestfood.png"
                alt=""
              />
              <img
                className="h-28 "
                style={{ maxWidth: "100%" }}
                src="/src/assets/bestfood.png"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="h-[470px] "
                style={{ maxWidth: "100%" }}
                src="/src/assets/bestfood.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#ff9f0d] font-bold">In Stack</h1>
            <h1 className="text-4xl font-bold my-5">Yummy Chicken Chup</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
            <h1 className="text-4xl mt-10 font-bold my-5">54.00$ </h1>
            <div className="flex justify-start items-center gap-2 ">
              <div className="my-5">
                <label htmlFor="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>

                <div className="flex items-center ">
                  <button
                    type="button"
                    className="size-10 border-2 p-3 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    <FaMinus />
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-16 p-3 py-5 border-2 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="size-10 border-2 p-3 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button className="bg-[#FF9F0D] btn">
                <FaShoppingCart />
                Add To Cart
              </button>
            </div>
            <div className="flex justify-start items-center gap-5 my-5">
              <h1>
                <CiHeart className="inline-block text-2xl" />
                Add to Wishlist
              </h1>
              <h1>
                <IoGitCompare className="inline-block text-2xl" />
                Compare
              </h1>
            </div>
            <h1>Category:Pizza</h1>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------
            --------------------------------------------------------- */}
      <section className="px-16">
        <div className="flex justify-start items-center gap-2">
          <button className="bg-[#FF9F0D] btn text-white">Description</button>
          <h1>Reviews (24)</h1>
        </div>
        <h1 className="my-5">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </h1>
        <h1>
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </h1>
        <h1 className="my-5 font-bold">Key Benefits</h1>
        <p>
          {" "}
          <GoDotFill className="mr-2 inline-block" /> Mauris eget diam magna, in
          blandit turpis.
        </p>
        <p>
          {" "}
          <GoDotFill className="mr-2 inline-block" /> Maecenas ullamcorper est
          et massa mattis condimentum.
        </p>
        <p>
          {" "}
          <GoDotFill className="mr-2 inline-block" /> Vestibulum sed massa vel
          ipsum imperdiet malesuada id tempus nisl.
        </p>
        <p>
          {" "}
          <GoDotFill className="mr-2 inline-block" /> Etiam nec massa et lectus
          faucibus ornare congue in nunc..
        </p>
      </section>
      {/* ----------------------------------------------------------
            --------------------------------------------------------- */}
      <section className="px-16">
        <h1 className="text-3xl font-bold my-5">Similar Products</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-2">
          <img
            src="https://i.ibb.co/RYKRsBY/unsplash-Lg-Tyii0-GDKQ.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/RYKRsBY/unsplash-Lg-Tyii0-GDKQ.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/RYKRsBY/unsplash-Lg-Tyii0-GDKQ.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/RYKRsBY/unsplash-Lg-Tyii0-GDKQ.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default ShopDetails;
