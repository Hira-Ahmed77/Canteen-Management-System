import { MdOutlinePending } from "react-icons/md";
import useAllOrder from "../../AxiosHook/useAllOrder";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import Swal from "sweetalert2";

const AllOrder = () => {
  const [order, refetch] = useAllOrder();
  const AxiosPublic = UseAxiosPublic();

  const handleapproved = (id) => {
    AxiosPublic.patch(`/allOrders/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });

    AxiosPublic.patch(`/menu/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });

    AxiosPublic.delete(`/order/${id}`).then((res) => {
      refetch();
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your cart has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete blog",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/allOrders/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(order);
  return (
    <div>
      <div className="mt-16">
        <div className=" p-2  sm:p-4 dark:text-gray-100">
          <h2 className="mb-4 text-6xl text-center font-semibold text-black">
            All Orders
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="dark:bg-gray-700">
                <tr className="">
                  <th className="p-3 text-center">Serial</th>
                  <th className="p-3 text-center">Name</th>
                  <th className="p-3 text-center">Total Pay</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {order.map((cart, i) => (
                  <tr
                    key={cart._id}
                    className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <td className="p-3 text-center">
                      <p>{i + 1}</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>{cart.name}</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>{cart.price}</p>
                    </td>
                    <td className="p-3 text-center ">
                      {cart.status === "Approved" ? (
                        <button
                          onClick={() => handleapproved(cart._id)}
                          className="inline-block btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
                        >
                          Approved
                          <MdOutlinePending className="inline-block" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleapproved(cart._id)}
                          className="inline-block btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm"
                        >
                          Pending
                          <MdOutlinePending className="inline-block" />
                        </button>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {cart.status === "Approved" && (
                        <button onClick={() => handleDelete(cart._id)}>
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
