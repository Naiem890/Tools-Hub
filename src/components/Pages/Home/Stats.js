import React from "react";
import {
  ChartBarIcon,
  CubeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const Stats = () => {
  return (
    <div className="bg-white py-10 mt-20">
      <div className="container mx-auto 2xl:px-32 px-4 ">
        {/* <h2 className="text-4xl text-center">
          We're <span className="border-b-4 pb-2 border-info">Trusted</span> By
          People
        </h2> */}
        <div class="stats stats-vertical lg:stats-horizontal w-full bg-transparent border-0">
          <div class="stat ">
            <div class="stat-figure text-success ">
              <ChartBarIcon className="w-12 h-12"></ChartBarIcon>
            </div>
            <div class="stat-title text-lg mb-2">Total Sales</div>
            <div class="stat-value text-success">250.6K</div>
            <div class="stat-desc text-sm mt-1 text-secondary">
              21% more than last month
            </div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <CubeIcon className="w-12 h-12"></CubeIcon>
            </div>
            <div class="stat-title text-lg mb-2">Total Order</div>
            <div class="stat-value text-secondary">160K</div>
            <div class="stat-desc text-sm mt-1 text-secondary">
              51% more than last month
            </div>
          </div>

          <div class="stat">
            <div class="stat-figure ">
              <UserGroupIcon className="w-12 h-12"></UserGroupIcon>
            </div>
            <div class="stat-title text-lg mb-2">New User</div>
            <div class="stat-value">26%</div>
            <div class="stat-desc text-sm mt-1 text-secondary ">
              20% more than last month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
