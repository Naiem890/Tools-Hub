import { TemplateIcon } from "@heroicons/react/outline";
import { CogIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col mx-4">
        <h2 className="text-3xl my-4 border-b-2 border-gray-300 pb-4">
          Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu gap-3 p-4 overflow-y-auto w-80 bg-base-100 text-base -content ">
          <li className="border bg-slate-100">
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li className="border bg-slate-100">
            <Link to="/dashboard">My Order</Link>
          </li>
          <li className="border bg-slate-100">
            <Link to="/dashboard/add-review">Add Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
