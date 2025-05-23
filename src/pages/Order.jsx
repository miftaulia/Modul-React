import { useState } from "react";
// import orderData from "../assets/orders.json";
import orderData from "../assets/Orders.json"
import PageHeader from "../components/PageHeader";

export default function Order() {
  const [orders, setOrders] = useState(orderData);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (newOrder) => {
    const id = `O${String(orders.length + 1).padStart(3, "0")}`;
    setOrders([...orders, { ...newOrder, orderId: id }]);
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <PageHeader title="Orders">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "Add Order"}
        </button>
      </PageHeader>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.target));
            form.totalPrice = parseFloat(form.totalPrice);
            handleAdd(form);
          }}
          className="space-y-2 mb-6 bg-white p-4 rounded shadow"
        >
          <input
            name="customerName"
            placeholder="Customer Name"
            required
            className="border p-2 w-full"
          />
          <select name="status" className="border p-2 w-full">
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <input
            type="number"
            name="totalPrice"
            placeholder="Total Price"
            required
            className="border p-2 w-full"
          />
          <input
            type="date"
            name="orderDate"
            required
            className="border p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
      )}

      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left px-6 py-3">Order ID</th>
            <th className="text-left px-6 py-3">Customer</th>
            <th className="text-left px-6 py-3">Total Price</th>
            <th className="text-left px-6 py-3">Date</th>
            <th className="text-left px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.orderId} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{item.orderId}</td>
              <td className="px-6 py-4">{item.customerName}</td>
              <td className="px-6 py-4">
                Rp {item.totalPrice.toLocaleString()}
              </td>
              <td className="px-6 py-4">{item.orderDate}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
              ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
