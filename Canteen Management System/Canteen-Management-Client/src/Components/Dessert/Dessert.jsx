const Dessert = () => {
  return (
    <div className="my-10  w-3/4 mx-auto">
      <div className=" flex gap-11">
        <div>
          <img
            className=" h-[500px] w-[330px]"
            src="https://i.ibb.co/4tqxPG7/unsplash-90-Hd-Ol-Gbjck.png"
            alt=""
          />
        </div>
        <div className=" mt-5">
          <h2 className=" text-3xl font-bold">Dessert</h2>
          <div className=" my-6">
            <div className=" flex gap-[263px]">
              <h4 className=" text-base font-bold">Fig and lemon cake</h4>
              <p className=" text-[#ff9f0d]">32$</p>
            </div>
            <p className=" text-[#4f4f4f]">
              Toasted French bread topped with romano, cheddar
            </p>
            <span className=" text-[#828282]"> 500 CAL</span>
          </div>
          <div className=" mt-2">
            <div className=" flex gap-[218px]">
              <h4 className=" text-base font-bold">Creamy mascarpone cake</h4>
              <p className=" text-[#ff9f0d]">43$</p>
            </div>
            <p className=" text-[#4f4f4f]">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <span className=" text-[#828282]"> 700 CAL</span>
          </div>
          <div className=" my-6">
            <div className=" flex gap-[174px]">
              <h4 className=" text-base font-bold">
                Pastry, blueberries, lemon juice
              </h4>
              <p className=" text-[#ff9f0d]">32$</p>
            </div>
            <p className=" text-[#4f4f4f]">
              Ground cumin, avocados, peeled and cubed
            </p>
            <span className=" text-[#828282]"> 1000 CAL</span>
          </div>
          <div className=" mt-2">
            <div className=" flex gap-[286px]">
              <h4 className=" text-base font-bold">Pain au chocolat</h4>
              <p className=" text-[#ff9f0d]">32$</p>
            </div>
            <p className=" text-[#4f4f4f]">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <span className=" text-[#828282]"> 560 CAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
