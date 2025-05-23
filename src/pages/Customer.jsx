import { useState } from "react";
import CustomerData from "../assets/customers.json";
// import CustomerData from "../assets/customers.json"
import PageHeader from "../components/PageHeader";
import { ImQrcode } from "react-icons/im";

export default function Customer() {
  const [customers, setCustomers] = useState(CustomerData);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (newCustomer) => {
    const id = `${String(customers.length + 1).padStart(3, "0")}`;
    setCustomers([...customers, { ...newCustomer, customerId: id }]);
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <PageHeader title="Customers">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "Add Customer"}
        </button>
      </PageHeader>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.target));
            handleAdd(form);
          }}
          className="space-y-2 mb-6 bg-white p-4 rounded shadow"
        >
          <input
            name="customerName"
            placeholder="Name"
            required
            className="border p-2 w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border p-2 w-full"
          />
          <input
            name="phone"
            placeholder="Phone"
            required
            className="border p-2 w-full"
          />
          <select name="loyalty" className="border p-2 w-full">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
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
            <th className="text-left px-6 py-3">Customer ID</th>
            <th className="text-left px-6 py-3">Name</th>
            <th className="text-left px-6 py-3">Email</th>
            <th className="text-left px-6 py-3">Phone</th>
            <th className="text-left px-6 py-3">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{customer.customerId}</td>
              <td className="px-6 py-4">{customer.customerName}</td>
              <td className="px-6 py-4">{customer.email}</td>
              <td className="px-6 py-4">{customer.phone}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    customer.loyalty === "Gold"
                      ? "bg-yellow-300 text-yellow-800"
                      : customer.loyalty === "Silver"
                      ? "bg-gray-300 text-gray-800"
                      : "bg-orange-200 text-orange-800"
                  }`}
                >
                  {customer.loyalty}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
