import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";
import useMenu from "../../AxiosHook/useMenu";
import { useState } from "react";

const Menu = () => {
  const [menu] = useMenu();
  const categories = ["salad", "pizza", "soup", "dessert", "drink", "snack"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabs, setTabs] = useState(initialIndex === -1 ? 0 : initialIndex);

  const filteredMenu = (category) =>
    menu.filter((item) => item.category === category);

  return (
    <div className="mt-32 px-4 md:px-8 lg:px-16 max-w-[1640px] mx-auto">
      <div>
        <div className="mb-8">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#ff9f0d]">Ou</span>r Food Items
          </h2>
        </div>
      </div>

      <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
        <TabList className="tabs tabs-bordered text-center flex justify-center items-center gap-2 md:gap-5 my-5 uppercase">
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
            <h1 className="uppercase text-[#ff9f0d] font-bold py-5">
              Remaining <span>{cat}</span> Quantity {"=>"}{" "}
              {filteredMenu(cat).length}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
              {filteredMenu(cat).map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
