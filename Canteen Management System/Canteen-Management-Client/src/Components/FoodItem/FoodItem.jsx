import "../FoodItem/FoodItems.css";
const FoodItem = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl my-5 text-center font-bold">
        {" "}
        <span className="inline-block text-[#FF9F0D]">Ch</span>oose Food Items
      </h1>
      <div className="">
        <div className="brands">
          <div className="brands__preWrapper">
            <div className="brands__wrapper">
              <a href="#">
                <img
                  className="h-full w-[250px]"
                  src="https://i.ibb.co/1Kr2wZW/123404658-109688937608664-1926118359264607818-n.jpg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-[300px] w-[250px]"
                  src="https://i.ibb.co/BNjrMLt/20190513161957-20171010145129-01.jpg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-full w-[250px]"
                  src="https://i.ibb.co/vqCQW8V/maxresdefault-3.jpg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-full w-[250px]"
                  src="https://i.ibb.co/Qk9Jn5R/delish-french-fries-horizontal-1537551908.jpg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-[300px] w-[250px]"
                  src="https://i.ibb.co/1mctRJY/dim-alu-chop.jpg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-full w-[250px]"
                  src="https://i.ibb.co/MgMSFCX/fooditem.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-full w-[250px]"
                  src="https://i.ibb.co/7YBhrHH/Chicken-Wings.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
