import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/image/logo.svg";

const Footer = () => {
  const footerLink = [
    { linkText: "Home", linkRoute: "/" },
    { linkText: "Blog", linkRoute: "/blog" },
  ];

  return (
    <div>
      <div className=" mb-6 container mx-auto 2xl:px-32 px-4">
        <hr className="mb-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-6" />

        <footer className="bg-white rounded-lg   dark:bg-gray-800">
          <div className="flex items-center justify-between  flex-wrap gap-3">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={logo} className="h-8" alt="tools hub Logo" />
            </Link>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()} Tools-Hub. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center  text-sm text-gray-500  dark:text-gray-400">
              {footerLink.map((footerLink) => {
                return (
                  <li>
                    <a
                      href={footerLink.linkRoute}
                      className="mr-4 hover:underline md:mr-6 font-semibold"
                    >
                      {footerLink.linkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
