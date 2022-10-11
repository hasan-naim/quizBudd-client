import { Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo";

function Header() {
  return (
    <div className=" dark:bg-gray-800 shadow-md">
      <div className="container">
        <Navbar fluid={true} rounded={true} className="duration-1000">
          <Navbar.Brand>
            {/* <img
              src="assets/logo/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="QuizBudd logo"
            /> */}
            <div className="mr-2">
              <Logo></Logo>
            </div>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              QuizBudd
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="duration-1000">
            <NavLink
              to={"/"}
              className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              {({ isActive }) => {
                return (
                  <span className={`${isActive ? "text-slate-200" : ""}`}>
                    Home
                  </span>
                );
              }}
            </NavLink>

            <NavLink
              to={"/statistics"}
              className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              {({ isActive }) => {
                return (
                  <span className={`${isActive ? "text-slate-200" : ""}`}>
                    Statistics
                  </span>
                );
              }}
            </NavLink>

            <NavLink
              to={"/blog"}
              className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              {({ isActive }) => {
                return (
                  <span className={`${isActive ? "text-slate-200" : ""}`}>
                    Blog
                  </span>
                );
              }}
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
