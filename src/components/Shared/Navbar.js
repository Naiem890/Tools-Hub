import React from "react";
import logo from "./../../assets/image/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { linkText: "Home", linkRoute: "/" },
    { linkText: "Blogs", linkRoute: "/blogs" },
    { linkText: "About Me", linkRoute: "/portfolio" },
  ];
  return (
    <div>
      <div className="navbar  container 2xl:px-20 py-3  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((navLink) => {
                return (
                  <li>
                    <Link to={navLink.linkRoute}>{navLink.linkText}</Link>
                  </li>
                );
              })}
              <Link to="" className="btn mt-2">
                Login
              </Link>
              <Link to="" className="btn btn-outline mt-2">
                Register
              </Link>
            </ul>
          </div>
          <Link to="" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="tools-hub" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navLinks.map((navLink) => {
              return (
                <li>
                  <NavLink to={navLink.linkRoute}>{navLink.linkText}</NavLink>
                </li>
              );
            })}
          </ul>
          <Link to="/login" className="btn ml-4">
            Login
          </Link>
          <Link to="/register" className="btn  btn-outline ml-4">
            Register
          </Link>
        </div>
        {/* <div className="navbar-end"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
