import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/ForAll/Home/Home";
import Dashboard from "../Pages/DashboardLayout/Admin/Dashboard";
import DashboardLayout from "../Pages/DashboardLayout/Admin/DashboardLayout";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import Login from "../Components/Auth/ManualLogin/Login";
import Register from "../Components/Auth/ManualLogin/Register";
import Users from "../Pages/Admin/Users";
// import AdminOnly from "../Components/Auth/AdminOnly/AdminOnly";
import UserDashboardLayout from "../Pages/DashboardLayout/User/UserDahboardLayout";
import UserDashboard from "../Pages/DashboardLayout/User/UserDashboard";
// import Profile from "../Pages/User/Profile/Profile";
import Events from "../Pages/ForAll/Events/Events";
import EventInDetails from "../Pages/ForAll/EventInDetails/EventInDetails";
import Booking from "../Pages/ForAll/Booking/Booking";
import EventsInAdmin from "../Pages/Admin/EventsInAdmin";
import AllBooking from "../Pages/Admin/AllBooking";
import AllPayment from "../Pages/Admin/AllPayment";
import PaymentSuccess from "../Pages/ForAll/Payments/PaymentSuccess";
import PaymentFail from "../Pages/ForAll/Payments/PaymentFail";
import PaymentCancel from "../Pages/ForAll/Payments/PaymentCancel";
import AddEvent from "../Pages/Admin/AddEvent";
import Tickets from "../Pages/User/Tickets/Tickets";
import Profile from "../Pages/User/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <EventInDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />,
      },
      
      {
        path: "/payment/fail",
        element: <PaymentFail />,
      },
      {
        path: "/payment/cancel",
        element: <PaymentCancel />,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <UserDashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
            {
            path: "tickets",
            element: <Tickets />,
          },
          {
            path: "*",
            element: (
              <div className="my-6">
                <h2 className="text-6xl text-pink-500 text-center">404</h2>
                <h2 className="text-6xl text-pink-500 text-center capitalize">
                  opps! page Not found
                </h2>
              </div>
            ),
          },
        ],
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {/* <AdminOnly> */}
            <DashboardLayout />
            {/* </AdminOnly> */}
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "events",
            element: <EventsInAdmin />,
          },
          {
            path: "addEvent",
            element: <AddEvent />,
          },
          {
            path: "allBooking",
            element: <AllBooking />,
          },
          {
            path: "allPayment",
            element: <AllPayment />,
          },
          {
            path: "*",
            element: (
              <div className="my-6">
                <h2 className="text-6xl text-pink-500 text-center">404</h2>
                <h2 className="text-6xl text-pink-500 text-center capitalize">
                  opps! page Not found
                </h2>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="my-6">
        <h2 className="text-6xl text-pink-500 text-center">404</h2>
        <h2 className="text-6xl text-pink-500 text-center capitalize">
          opps! page Not found
        </h2>
      </div>
    ),
  },
]);

export default router;
