import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <div className="w-full">
      <Outlet></Outlet>
    </div>
  );
};

export default UserDashboardLayout;
