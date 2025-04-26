import React, { useState, useEffect } from "react";
import "@fontsource/martel-sans/400.css";
import "@fontsource/fredoka/600.css";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminView, setAdminView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setAdminView(role === "admin");
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const goToLoginPage = () => navigate("/login");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setAdminView(false);
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  // ADMIN NAVBAR: Only logout visible
  if (adminView) {
    return (
      <div className="w-full bg-customBlue h-[10vh] flex justify-between items-center px-6 md:px-12 fixed z-50 shadow-lg">
        <Link
          className="text-white font-bold text-[30px] lg:text-[35px] xl:text-[45px]"
          style={{ fontFamily: "Fredoka, serif" }}
          to="/"
        >
          <span className="text-customYellow">gu</span>idex
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white text-customBlue text-xl px-4 py-2 rounded-md hover:bg-customYellow hover:text-customBlue transition duration-300 shadow-md w-[100px] lg:w-[150px]"
          style={{ fontFamily: "Martel Sans, serif" }}
        >
          Logout
        </button>
      </div>
    );
  }

  // NORMAL NAVBAR
  return (
    <div className="w-full bg-customBlue h-[10vh] flex justify-between items-center px-4 md:px-10 fixed z-50 shadow-lg">
      <Link
        className="text-white font-bold text-[30px] pl-2 lg:text-[35px] xl:text-[45px]"
        style={{ fontFamily: "Fredoka, serif" }}
        to="/"
      >
        <span className="text-customYellow">gu</span>idex
      </Link>

      {!isAdmin && (
        <div className="md:hidden flex">
          <div className="flex items-center py-2 px-4">
            <img
              src={searchIcon}
              alt="Search"
              className="h-[20px] opacity-80 hover:opacity-100 transition duration-200"
            />
          </div>
          <button
            className="text-white text-2xl hover:text-customYellow transition duration-300"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      )}

      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } absolute top-[10vh] left-0 w-full bg-customBlue md:static md:flex md:w-auto md:items-center md:gap-8 md:flex-row md:bg-transparent text-white text-[20px]`}
      >
        <Link
          to="/"
          className="block py-2 px-4 hover:text-customYellow transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/schemes"
          className="block py-2 px-4 hover:text-customYellow transition duration-200"
        >
          Schemes
        </Link>
        <Link
          to="/feedback"
          className="block py-2 px-4 hover:text-customYellow transition duration-200"
        >
          Feedback
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 md:gap-6">
        <form action="" className="relative mx-auto w-max">
          <input
            type="search"
            placeholder="Search..."
            className="peer relative z-10 h-12 w-12 rounded-full bg-transparent pl-12 outline-none border border-white focus:w-full focus:pl-16 focus:pr-4 text-white transition-all duration-300 placeholder-white/70 cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-6 w-12 stroke-white px-3.5 peer-focus:stroke-customYellow transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>

        {isLoggedIn ? (
          <>
            <div
              onClick={goToProfile}
              className="cursor-pointer text-white text-4xl hover:text-customYellow transition duration-300"
            >
              <FaUserCircle />
            </div>
            <button
              onClick={handleLogout}
              className="bg-white text-customBlue text-xl px-4 py-2 rounded-md hover:bg-customYellow hover:text-customBlue transition duration-300 shadow-md w-[100px] lg:w-[150px]"
              style={{ fontFamily: "Martel Sans, serif" }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-white text-customBlue text-xl px-4 py-2 rounded-md hover:bg-customYellow hover:text-customBlue transition duration-300 shadow-md w-[100px] lg:w-[150px]"
            style={{ fontFamily: "Martel Sans, serif" }}
            onClick={goToLoginPage}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
