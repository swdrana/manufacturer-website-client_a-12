import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboardSlider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {/* <h1>Dashboard</h1> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardSlider" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="profile">My Profile</Link>
            </li>
            <li>
              <Link to="add-review">Add A Review</Link>
            </li>
            <li>
              <Link to="my-orders">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
