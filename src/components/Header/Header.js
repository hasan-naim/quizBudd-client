import { Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" dark:bg-gray-800 shadow-md">
      <div className="container">
        <Navbar fluid={true} rounded={true} className="duration-1000">
          <Navbar.Brand>
            <img
              src="assets/logo/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="QuizBudd logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              QuizBudd
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="duration-1000">
            <Navbar.Link>
              <NavLink to={"/"}>
                {({ isActive }) => {
                  return (
                    <span className={`${isActive ? "text-slate-200" : ""}`}>
                      Home
                    </span>
                  );
                }}
              </NavLink>
            </Navbar.Link>
            <Navbar.Link>
              <NavLink to={"/statistics"}>
                {({ isActive }) => {
                  return (
                    <span className={`${isActive ? "text-slate-200" : ""}`}>
                      Statistics
                    </span>
                  );
                }}
              </NavLink>
            </Navbar.Link>
            <Navbar.Link>
              <NavLink to={"/blog"}>
                {({ isActive }) => {
                  return (
                    <span className={`${isActive ? "text-slate-200" : ""}`}>
                      Blog
                    </span>
                  );
                }}
              </NavLink>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
