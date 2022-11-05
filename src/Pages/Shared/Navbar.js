import React, { useEffect, useState } from "react";
import logo from "./../../assets/image/logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { CogIcon } from "@heroicons/react/outline";
import Loading from "./Loading";

const Navbar = () => {
  const navLinks = [
    { linkText: "Home", linkRoute: "/" },
    { linkText: "Blogs", linkRoute: "/blogs" },
    { linkText: "About Us", linkRoute: "/about-us" },
    { linkText: "Portfolio", linkRoute: "/portfolio" },
  ];

  const [user, loading] = useAuthState(auth);
  // const [userName, setUserName] = useState("");

  /* useEffect(() => {
    if (user) {
      setUserName(user?.displayName?.split(" ")[0]);
    }
  }, [user, user?.displayName]); */

  console.log("dekhi", user);

  if (loading) {
    return <Loading></Loading>;
  }

  // console.log(user?.displayName?.split(" ")[0]);

  return (
    <div className="bg-white sticky top-0 z-20">
      <div className="navbar  container 2xl:px-20 py-3  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((navLink, i) => {
                return (
                  <li key={i}>
                    <Link to={navLink.linkRoute}>{navLink.linkText}</Link>
                  </li>
                );
              })}
              <Link to="/login" className="btn mt-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline mt-2">
                Register
              </Link>
            </ul>
          </div>
          <Link to="" className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="md:-ml-0 -ml-8" alt="tools-hub" />
          </Link>
        </div>

        <div className="navbar-end  lg:flex">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navLinks.map((navLink, i) => {
                return (
                  <li key={i}>
                    <NavLink to={navLink.linkRoute}>{navLink.linkText}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end  ">
                <div className="flex">
                  <label tabIndex="0" className="btn font-medium btn-ghost">
                    <p className="font-semibold">Dashbord</p>
                    <svg
                      className="fill-current translate-x-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </label>
                  <label
                    for="my-drawer-2"
                    class="btn btn-outline btn-md  drawer-button  btn-circle lg:hidden flex "
                  >
                    <CogIcon className="h-8 w-8"></CogIcon>
                  </label>
                </div>

                <ul
                  tabIndex="0"
                  className="menu menu-compact gap-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard">My Order</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/add-review">Add Review</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/profile">My Profile</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="btn btn-md btn-outline btn-primary mt-2"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="hidden md:flex">
              <Link to="/login" className="btn ml-4">
                Login
              </Link>
              <Link to="/register" className="btn  btn-outline ml-4">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
