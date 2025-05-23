import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader.jsx";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader
                title="Dashboard"
                breadcrumb={["Dashboard", "Order List"]}
            >
                <button className="bg-hijau text-white px-4 py-2 rounded-lg">Add Button</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Export</button>
                <button className="bg-red-600 text-gray-700 px-4 py-2 rounded-lg">Back</button>
            </PageHeader>

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-hijau rounded-full p-4"><FaShoppingCart /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">75</span>
                        <span className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-merah rounded-full p-4"><FaTruck /></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">175</span>
                        <span className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-biru rounded-full p-4"><FaBan /></div>
                    <div className="flex flex-col">
                        <span  className="text-2xl font-bold">40</span>
                        <span className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-kuning rounded-full p-4"><FaDollarSign /></div>
                    <div className="flex flex-col">
                        <span  className="text-2xl font-bold">Rp.128</span>
                        <span className="text-gray-400">Total Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}