import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

const Root = () => {
  const location = useLocation();
  const noheaderfooter = location.pathname.includes("dashboard");
  return (
    <div>
      <ScrollTop />
      {noheaderfooter || <NavBar></NavBar>}
      <div className="min-h-screen max-w-auto mx-auto">
        <Outlet></Outlet>
      </div>
      {noheaderfooter || <Footer></Footer>}
      <Toaster />
    </div>
  );
};

export default Root;
