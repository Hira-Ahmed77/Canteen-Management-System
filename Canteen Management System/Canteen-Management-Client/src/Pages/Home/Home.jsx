import Banner from "../../Components/Banner/Banner";
import BestFood from "../../Components/BestFood/BestFood";
import DocumentFood from "../../Components/DocumentFood/DocumentFood";
import EveryFood from "../../Components/EveryFood/EveryFood";
import Feedback from "../../Components/Feedback/Feedback";
import FoodItem from "../../Components/FoodItem/FoodItem";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";
import Menu from "../../Components/Menu/Menu";
import TesteFood from "../../Components/TesteFood/TesteFood";


const Home = () => {
  return (
    <div>
      <div className="mt-20 lg:px-16 md:px-10 px-5 max-w-[1840px] mx-auto">
        <Banner></Banner>
        <BestFood></BestFood>
        <FoodItem></FoodItem>
        <TesteFood></TesteFood>
      </div>
      <DocumentFood></DocumentFood>
      <div className="mt-20 lg:px-16 md:px-10 px-5">
        {/* <OurMenu></OurMenu> */}
        <Menu></Menu>
      </div>
      <EveryFood></EveryFood>
      <div className="mt-20 lg:px-16 md:px-10 px-5">
        <LatestBlog></LatestBlog>
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;
