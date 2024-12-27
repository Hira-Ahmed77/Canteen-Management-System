import UseAxiosSecure from "../../../Axios/UseAxiosSecure";
import UseUsers from "../../../AxiosFetch/UseUsers";
import Swal from "sweetalert2";

const Users = () => {
  const [users, refetch] = UseUsers();
  const AxiosSecure = UseAxiosSecure();
  const handleMakeAdmin = (id) => {
    AxiosSecure.patch(`/users/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-20 bg-[#04FAFF] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-full lg:grid-cols-3 gap-4">
      {users?.map((user) => (
        <div key={user?.id} className="p-4 border border-[#003a90] rounded">
          <img
            src={user?.photo}
            alt={user?.name}
            className="rounded-full w-28 h-28 mx-auto object-cover mb-4"
          />
          <div>
            <h3 className="text-lg text-[#003a90] font-semibold">
              {user?.name}
            </h3>
            <p className="text-[#003a90]">{user?.email}</p>
          </div>
          <div className=" mt-4 flex justify-between">
            <button
              onClick={() => handleMakeAdmin(user?._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Make Admin
            </button>
            <button
              onClick={() => handleDelete(user?._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete User
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
