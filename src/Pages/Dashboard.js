import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [admin] = useAdmin();
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

            {/* Non Admin  */}
            {!admin && (
              <li>
                <Link to="my-orders">My Orders</Link>
              </li>
            )}
            {!admin && (
              <li>
                <Link to="add-review">Add A Review</Link>
              </li>
            )}

            {/* Only Admin  */}
            {admin && (
              <li>
                <Link to="manage-orders">Manage All Orders</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="add-product">Add Product</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="admin-management">Admin Management</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="manage-products">Manage Products</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
