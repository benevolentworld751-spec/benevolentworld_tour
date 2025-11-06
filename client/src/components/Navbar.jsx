import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ logo
import profilePic from "../assets/about.jpg"; // ✅ sample profile image (optional)
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const activeLink = location.pathname;
  const linkClass = (path) =>
    `hover:underline hover:scale-105 transition-all duration-150 ${
      activeLink === path ? "underline text-orange-500" : ""
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo + Brand */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Benevolent Logo"
              className="w-12 h-12 object-contain"
            />
         
         <div className="leading-tight"> 
          <p className="text-xl font-bold text-gray-800">
             <span className="text-blue-700">Benevolent</span> 
             </p> 
             <p className="text-gray-600 text-sm -mt-1">World Travel</p>
              
          </div>
          </Link>
        </div>

        {/* 📱 Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger
              )}
            </svg>
          </button>
        </div>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link to="/home" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/package" className="text-gray-600 hover:text-blue-600">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* ✈️ Book Now */}
          <Link
            to="/search"
            className="bg-blue-300 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300"
          >
            Book Now
          </Link>

          <div className="flex-1 flex justify-end items-center">
            {currentUser ? (
              <Link
                to={`/profile/${
                  currentUser.user_role === 1 ? "admin" : "user"
                }`}
              >
                <img
                  src={
                    currentUser?.profilePic
                      ? currentUser.profilePic
                      : profilePic
                  }
                  alt="avatar"
                  className="border w-10 h-10 border-white rounded-full"
                />
              </Link>
            ) : (
              <Link
                className="bg-orange-300 text-white px-8 py-2 rounded-full border border-gray-100"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 shadow-md animate-slideDown">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  to="/home"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/package"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Book Now
                </Link>
              </li>
              {/* 👤 Profile in mobile menu */}
              <li>
                {currentUser ? (
                  <Link
                    to={`/profile/${
                      currentUser.user_role === 1 ? "admin" : "user"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          currentUser?.profilePic
                            ? currentUser.profilePic
                            : profilePic
                        }
                        alt="avatar"
                        className="border w-10 h-10 object-cover border-white rounded-full"
                      />
                      <span>Profile</span>
                    </div>
                  </Link>
                ) : (
                  <Link to="/login" className={linkClass("/login")}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
