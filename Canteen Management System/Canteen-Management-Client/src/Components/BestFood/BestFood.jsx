import { SiNike } from "react-icons/si";
import { Link } from "react-router-dom";

const BestFood = () => {
  return (
    <div>
      <div className="my-5  mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 py-5 justify-center items-center">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold mb-5">
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </h1>
            <p className="text-base pl-1">
              Food science is the study of the physical, chemical, and
              biological aspects of food and how they affect its quality,
              safety, and functionality. You need to understand how different
              ingredients, processes, and packaging affect the nutritional
              value, sensory properties, shelf life, and environmental impact of
              your product.
            </p>

            <p>
              <SiNike className="inline-block" /> Sustainability and ingredient
              sourcing
            </p>
            <p>
              <SiNike className="inline-block" /> Market research and validating
            </p>
            <p>
              <SiNike className="inline-block" />
              Involve consumers in the process
            </p>
            <Link>
              <button className="btn mt-5 btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm mb-8 md:mb-0">
                Read More
              </button>
            </Link>
          </div>
          <div className="w-full overflow-hidden">
            <div className="mx-auto w-full mb-2">
              <img src="https://i.ibb.co/Y2YkF98/bestfood.png" alt="" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-2 ">
              <img src="https://i.ibb.co/nLXtVs7/bestfood2.png" alt="" />
              <img src="https://i.ibb.co/YjCxrCm/bestfood3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFood;
