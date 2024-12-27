import img1 from "../../assets/menu/maincourse.png";

const MainCourse = () => {
  return (
    <div className="my-20 ">
      <div className="flex gap-11">
        <div className="mt-5 flex flex-col">
          <h2 className="text-3xl font-bold">Main Course</h2>
          <div className="my-6">
            <MenuItem
              name="Optic Big Breakfast Combo Menu"
              price="32$"
              description="Toasted French bread topped with romano, cheddar"
              calorie="500 CAL"
            />
            <MenuItem
              name="Cashew Chicken With Stir-Fry"
              price="43$"
              description="Gorgonzola, ricotta, mozzarella, taleggio"
              calorie="700 CAL"
            />
            <MenuItem
              name="Vegetables & Green Salad"
              price="32$"
              description="Ground cumin, avocados, peeled and cubed"
              calorie="1000 CAL"
            />
            <MenuItem
              name="Spicy Vegan Potato Curry"
              price="32$"
              description="Spreadable cream cheese, crumbled blue cheese"
              calorie="560 CAL"
            />
          </div>
        </div>
        <div>
          <img className="h-[500px] w-[330px]" src={img1} alt="" />
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
        <p className="text-[#ff9f0d] ml-44">{price}</p>{" "}
      </div>
      <p className="text-[#4f4f4f]">{description}</p>

      <span className="text-[#828282]">{calorie}</span>
    </div>
  );
};

export default MainCourse;
