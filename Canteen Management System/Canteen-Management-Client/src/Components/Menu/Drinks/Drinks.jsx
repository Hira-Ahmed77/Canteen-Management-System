import image from "../../../assets/menu/Drinks.png";

const Drinks = () => {
  return (
    <div className="my-20 ">
      <div className="flex gap-11">
        <div className="mt-5 flex flex-col">
          <h2 className="text-3xl font-bold">Drinks</h2>
          <div className="my-6">
            <MenuItem
              name="Caffè macchiato"
              price="32$"
              description="Toasted French bread topped with romano, cheddar"
              calorie="500 CAL"
            />
            <MenuItem
              name="Aperol Spritz Capacianno"
              price="43$"
              description="Gorgonzola, ricotta, mozzarella, taleggio"
              calorie="700 CAL"
            />
            <MenuItem
              name="Caffe Latte Campuri"
              price="32$"
              description="Ground cumin, avocados, peeled and cubed"
              calorie="1000 CAL"
            />
            <MenuItem
              name="Tormentoso BushTea Pintoage"
              price="32$"
              description="Spreadable cream cheese, crumbled blue cheese"
              calorie="500 CAL"
            />
          </div>
        </div>
        <div>
          <img className="h-[500px] w-[330px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ name, price, description, calorie }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold">{name}</h4>
        <p className="text-[#ff9f0d]  ml-44">{price}</p>
      </div>
      <p className="text-[#4f4f4f]">{description}</p>
      <span className="text-[#828282]">{calorie}</span>
    </div>
  );
};

export default Drinks;
