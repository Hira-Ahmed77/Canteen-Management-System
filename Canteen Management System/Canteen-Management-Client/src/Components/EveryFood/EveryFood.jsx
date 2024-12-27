const EveryFood = () => {
  return (
    <div className="mt-5">
      <div
        className="hero p-6"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qJ4HdWL/unsplash-E6-Dsqn-Zb-Z4o.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content lg:ml-[300px] md:ml-[250px] text-neutral-content text-right pt-10">
          <div className="max-w-md">
            <h4 className="  text-[#ff9f0d] italic text-xl font-semibold">
              Restaurant Active Process
            </h4>
            <h1 className="mb-5 text-2xl font-bold ">
              <span className="text-[#ff9f0d]">We</span> Document Every Food
              <br /> Bean Process untile it is saved
            </h1>
            <p className="mb-5 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna.
            </p>
            <button className="btn text-white btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryFood;
