import { useState } from "react";
import toast from "react-hot-toast";

const OurSupport = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      toast.success("Thank you for subscribing!");
    } else {
      toast.error("Invalid email. Please enter a valid email address.");
    }
  };

  return (
    <div className="mt-5">
      <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold leading">
              <span className="text-[#FF9F0D]">S</span>till You Need Our
              Support?
            </h1>
            <p className="text-base">
              Don’t wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <div className="flex flex-row items-center self-center rounded-l-lg justify-center flex-shrink-0 shadow-lg text-white lg:justify-end">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleInputChange}
                className="w-3/5 placeholder-white p-2 rounded-l-lg sm:w-2/3 text-white bg-[#FF9F0D]"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-2/5 p-2 font-semibold rounded-r-lg sm:w-1/3 dark:bg-white text-[#FF9F0D]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
