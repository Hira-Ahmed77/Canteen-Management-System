import useOrder from "../../AxiosHook/useOrder";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";

const Orders = () => {
  const [orders, refetch] = useOrder();
  const AxiosPublic = UseAxiosPublic();
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
        AxiosPublic.delete(`/orders/${id}`).then((res) => {
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

  console.log(orders);
  return (
    <div className="mt-16">
      <div className=" p-2  sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-6xl text-center font-semibold text-black">
          My Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
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
                <th className="p-3 text-center">action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((cart, i) => (
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
                      <button className="inline-block ">Approved</button>
                    ) : (
                      <button className="inline-block ">Pending</button>
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
  );
};

export default Orders;
