import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSingIn().then((res) => {
      toast.success("Login successfully");
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div>
      <div className="divider">continue with</div>
      <div className=" flex justify-center mt-5">
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-outline hover:bg-[#eb763a]"
        >
        <FcGoogle />  Google login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
