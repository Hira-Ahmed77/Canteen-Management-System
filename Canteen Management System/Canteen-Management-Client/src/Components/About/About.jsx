import { FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { BsCupHot } from "react-icons/bs";
import { IoAccessibilityOutline } from "react-icons/io5";
import useMenu from "../../AxiosHook/useMenu";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const About = () => {
  const [menu] = useMenu();
  const categories = ["salad", "pizza", "soup", "dessert", "drink", "snack"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabs, setTabs] = useState(initialIndex === -1 ? 0 : initialIndex);

  const filteredMenu = (category) =>
    menu.filter((item) => item.category === category);
  return (
    <div className="mt-[66px]">
      {/* banner section */}
      <div
        className="hero object-cover h-[300px] mb-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hcchtgh/unsplash-4ycv3-Ky1-ZZU.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>

            <div className=" flex gap-1 justify-center items-center">
              <Link to={"/"}>Home</Link>
              <FaAngleRight className="mt-1" />
              <button className=" text-[#ff9f0d]">About</button>
            </div>
          </div>
        </div>
      </div>

      {/* important part*/}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/hfVBCXW/unsplash-l-P5-MCM6n-Z5-A.png"
              className="rounded-md w-full"
              alt=""
            />
            <div>
              <img
                src="https://i.ibb.co/3d9n1sZ/unsplash-CLMp-C9-Uhy-To.png"
                className="rounded-md w-full mb-8"
                alt=""
              />
              <img
                src="https://i.ibb.co/kgTkp3Q/unsplash-Zu-IDLSz3-XLg-1.png"
                className="rounded-md w-full"
                alt=""
              />
            </div>
          </div>

          <div className="max-w-md">
            <h1 className="text-[#333] font-bold text-4xl mb-4">
              Food is an important part of a balanced diet
            </h1>
            <p className="text-[#4F4F4F] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="rounded-md px-4 py-2 bg-[#FF9F0D] text-white">
                Show more
              </button>
              <div className="flex items-center">
                <FaCirclePlay className="h-10 w-12 text-[#FF9F0D]" />
                <h1 className="text-[#333] font-bold ml-2">Watch video</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us section started */}
      <div className="text-center px-4">
        <h1 className="mt-20 text-[#333] font-bold text-4xl">Why Choose Us</h1>
        <h2 className="mt-2 text-base text-[#4F4F4F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam{" "}
          <br className="hidden md:inline-block" /> pellentesque bibendum non
          dui volutpat fringilla bibendum.
        </h2>
        <img
          className="mt-8 w-full h-auto max-h-[300px] object-cover"
          src="https://i.ibb.co/h81fFV7/unsplash-3iexv-MSh-Gf-Q.png"
          alt="Why Choose Us"
        />
      </div>

      {/* Best Chef section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 mt-20 mb-20 max-w-[1840px] mx-auto">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="w-16 h-12 text-[#FF9F0D]" />
          <div className="mt-2">
            <h1 className="text-[#333] font-bold text-2xl text-center py-2">
              Best Chef
            </h1>
            <p className="text-[#4F4F4F] font-bold text-base text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Quisque diam
              pellentesque <br /> bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <BsCupHot className="w-16 h-12 text-[#FF9F0D]" />
          <div className="mt-2">
            <h1 className="text-[#333] font-bold text-2xl text-center py-2">
              120 Item food
            </h1>
            <p className="text-[#4F4F4F] font-bold text-base text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Quisque diam
              pellentesque <br /> bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <IoAccessibilityOutline className="w-16 h-12 text-[#FF9F0D]" />
          <div className="mt-2">
            <h1 className="text-[#333] font-bold text-2xl text-center py-2">
              Clean Environment
            </h1>
            <p className="text-[#4F4F4F] font-bold text-base text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Quisque diam
              pellentesque <br /> bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-4 mb-20">
        <div className="bg-[#FF9F0D] w-full py-12">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold">Team Member</h1>
            <p className="mt-2 text-[#FFF] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <img
                className="w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full"
                src="https://i.ibb.co/DbVgfdB/unsplash-l-RAWc-T7uwh-Y.png"
                alt=""
              />
              <h2 className="text-[#4f4f4f] text-xl font-bold mt-4">
                Mark Henry
              </h2>
              <p className="text-[#878787] font-semibold text-lg">Owner</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full"
                src="https://i.ibb.co/kmh2983/unsplash-XQWfro4-Lr-Vs.png"
                alt=""
              />
              <h2 className="text-[#4f4f4f] text-xl font-bold mt-4">
                Lucky Helen
              </h2>
              <p className="text-[#878787] font-semibold text-lg">Chief</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full"
                src="https://i.ibb.co/CBKHqxD/unsplash-v3-Ol-BE6-fh-U.png"
                alt=""
              />
              <h2 className="text-[#4f4f4f] text-xl font-bold mt-4">
                Moon Henry
              </h2>
              <p className="text-[#878787] font-semibold text-lg">Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full"
                src="https://i.ibb.co/LdJDMpW/unsplash-Si-Qgni-cq-Fg.png"
                alt=""
              />
              <h2 className="text-[#4f4f4f] text-xl font-bold mt-4">
                Tom Monrow
              </h2>
              <p className="text-[#878787] font-semibold text-lg">Specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* our food menu section */}
      <div className="mt-4 px-4 lg:px-16 max-w-[1840px] mx-auto">
        <div className="text-center">
          <h1 className="text-[#333] text-4xl font-bold">Our Food Menu</h1>
          <p className="mt-3 text-[#4F4F4F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
          <TabList className="tabs tabs-bordered text-center flex flex-wrap justify-center items-center gap-2 sm:gap-5 my-5 uppercase">
            {categories.map((cat, index) => (
              <Tab
                key={index}
                className={`tab ${tabs === index ? "tab-active" : ""}`}
                style={{
                  borderBottom: tabs === index ? "2px solid #f97316" : "none",
                  outline: "none",
                  color: tabs === index ? "#f97316" : "inherit",
                }}
              >
                {cat}
              </Tab>
            ))}
          </TabList>
          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredMenu(cat).map((item) => (
                  <div key={item._id}>
                    <div>
                      <div className="flex flex-col sm:flex-row items-center justify-between">
                        <h2 className="text-2xl font-bold py-3">{item.name}</h2>
                        <div className="flex items-center mt-2 sm:mt-0">
                          <p className="text-xl font-bold text-[#ff9f0d]">
                            {item.price}
                          </p>
                          <span>
                            <FaBangladeshiTakaSign className="text-[#ff9f0d] font-bold text-xl ml-1" />
                          </span>
                        </div>
                      </div>
                      <p className="text-[#8d8d8d]">{item.short}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>

        {/* View menu button */}
        <div className="mt-3 flex items-center justify-center">
          <button className="text-white bg-[#FF9F0D] p-2 rounded-md">
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
