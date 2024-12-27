import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <div className="mt-[100px] mx-auto max-w-md p-6 rounded-lg shadow-md border">
      <div className="text-center  mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto animate-bounce">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold">{user?.displayName}</h1>
        <p className="">Email: {user?.email}</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleLogout}
          className="btn btn-outline border-0 border-[#ee793d] hover:bg-[#ee793d] hover:border-[#ee793d] border-b-4 hover:text-white btn-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
