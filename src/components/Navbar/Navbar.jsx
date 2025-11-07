import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isLoggedIn]);

  // Logout function
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  // Modal toggles
  const toggleSignIn = () => setSignInOpen(!signInOpen);
  const toggleSignUp = () => setSignUpOpen(!signUpOpen);
  const toggleMenu = () => setShowMenu(!showMenu);

  const navLinkClass = ({ isActive }) =>
    `font-semibold tracking-wider ${isActive
      ? "text-orange-500"
      : "text-zinc-800 hover:text-orange-500 transition"
    }`;

  return (
    <>
      <header
        className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled
            ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all"
            : ""
          }`}
      >
        <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[10vh] flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </Link>

          {/* Desktop Menu */}
          <ul className="md:flex gap-x-13 items-center hidden">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-x-5">
            {/* Search Bar */}
            {/* <div className="md:flex p-1 border-2 border-orange-500 rounded-4xl hidden">
              <input
                type="text"
                placeholder="Search....."
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <CiSearch />
              </button>
            </div> */}

            {/* Icons */}
            <a className="text-zinc-800 text-2xl cursor-pointer">
              <FaHeart />
            </a>
            <a className="text-zinc-800 text-2xl cursor-pointer">
              <Link to="/cart">
                <HiMiniShoppingBag />
              </Link>
            </a>

            {/* Signin / Signup / Logout Buttons */}
            <div className="md:flex md:gap-4 hidden">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={toggleSignIn}
                    className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={toggleSignUp}
                    className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Hamburger */}
            <button
              className="text-zinc-800 text-3xl md:hidden"
              onClick={toggleMenu}
            >
              {showMenu ? <RiMenu4Fill /> : <IoMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`md:hidden flex flex-col gap-y-8 bg-orange-500/15 backdrop-blur-xl rounded-lg p-10 items-center absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <li className="flex p-1 border-2 border-orange-500 rounded-4xl">
              <input
                type="text"
                placeholder="Search....."
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <CiSearch />
              </button>
            </li>

            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>

            {/* Signup / Signin / Logout in Mobile */}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="font-semibold tracking-wider text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={toggleSignIn}
                    className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    onClick={toggleSignUp}
                    className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      {/* SignIn & SignUp popups */}
      {signInOpen && (
        <SignIn
          onClose={toggleSignIn}
          setIsLoggedIn={setIsLoggedIn}
          onSwitchToSignUp={() => {
            setSignInOpen(false);
            setSignUpOpen(true);
          }}
        />
      )}
      {signUpOpen && (
        <SignUp
          onClose={toggleSignUp}
          onSwitchToLogin={() => {
            setSignUpOpen(false);
            setSignInOpen(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
