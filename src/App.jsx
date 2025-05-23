import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayouts";
import GuestLayouts from "./layouts/GuestLayouts";
// import Dashboard from './pages/Dashboard'
// import Order from './pages/Order'
// import Customer from './pages/Customer'
// import NotFound from './pages/NotFound'
// import Error from "./pages/Error"
// import MainLayout from "./layouts/MainLayout"
// import AuthLayout from "./layouts/AuthLayouts"
// import Login from "./pages/Auth/Login"
// import Register from "./pages/Auth/Register"
// import Forgot from "./pages/Auth/Forgot"
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customer = React.lazy(() => import("./pages/Customer"));
const Order = React.lazy(() => import("./pages/Order"));
const User = React.lazy(() => import("./pages/User"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const About = React.lazy(() => import("./pages/Guest/About"));
const GuestDashboard = React.lazy(() => import("./pages/Guest/GuestDashboard"));
const Produk = React.lazy(() => import("./pages/Guest/Produk"));
const Testi = React.lazy(() => import("./pages/Guest/Testi"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/users" element={<User />} />

          <Route path="/error/:code" element={<Error />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route
          path="/guest"
          element={
            <GuestLayout>
              <GuestDashboard />
            </GuestLayout>
          }
        />
        

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
