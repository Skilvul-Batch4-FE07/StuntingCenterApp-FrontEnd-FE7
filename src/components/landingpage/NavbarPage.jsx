import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import "../../styles/index.css";
import {
  AiFillHome,
  AiFillFileText,
  AiFillCalculator,
  AiFillMessage,
} from "react-icons/ai";
import { clearCurrentUser, getCurrentUser } from "../../utils/localStorage";
import { getUserFromApi } from "../../utils/api";
import { login, logout } from "../../features/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userProfile);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (user) {
      setUserName(user.name);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
      dispatch(login(parsedUser));
    }
  }, [user, dispatch]);

  useEffect(() => {
    const currentUserId = getCurrentUser();
    if (currentUserId) {
      getUserFromApi(currentUserId)
        .then((user) => {
          if (user) {
            dispatch(login(user));
            setUserName(user.name);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
          }
        })
        .catch((error) => {
          console.log("Terjadi kesalahan:", error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("loggedInUser");
    clearCurrentUser();
    navigate("/");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 py-2 ${
        isScrolled ? "transition-colors duration-500 bg-white shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full flex-wrap px-4">
        <NavLink to="/home" className="cursor-pointer">
          <img
            src={"https://i.postimg.cc/d3QWvCGR/logo-new1.png"}
            alt="Logo"
            className="sm:w-12 w-12"
          />
        </NavLink>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block text-white focus:outline-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v1H4V6zm0 6h16v-1H4v1zm16 4H4v1h16v-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v1H4V5zm0 6h16v1H4v-1zm0 6h16v1H4v-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <div>
          <nav
            className={`${
              isMobileMenuOpen ? "block justify-start" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full`}
          >
            <ul className="text-base text-gray-200 flex flex-col lg:flex-row items-center lg:justify-end lg:gap-8 space-x-3">
              <li
                className={`hover:text-teal-400 font-semibold text-md ${
                  isScrolled ? "text-gray-500" : ""
                }`}
              >
                <button className="flex gap-2 items-center">
                  <AiFillHome className="menu text-lg" />
                  <NavLink to="/">Home</NavLink>
                </button>
              </li>
              <li
                className={`hover:text-teal-400 font-semibold text-md ${
                  isScrolled ? "text-gray-500" : ""
                }`}
              >
                <button className="flex items-center gap-2">
                  <AiFillFileText className="menu text-lg" />
                  <NavLink to="/article">Artikel</NavLink>
                </button>
              </li>
              <li
                className={`hover:text-teal-400 font-semibold text-md ${
                  isScrolled ? "text-gray-500" : ""
                }`}
              >
                <button className="flex items-center gap-2">
                  <AiFillCalculator className="menu text-lg" />
                  <NavLink to="/bmi">BMI</NavLink>
                </button>
              </li>
              <li
                className={`hover:text-teal-400 font-semibold text-md ${
                  isScrolled ? "text-gray-500" : ""
                }`}
              >
                <button className="flex items-center gap-2">
                  <AiFillMessage className="text-lg" />
                  <NavLink to="/forum">Forum Diskusi</NavLink>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${
            isMobileMenuOpen ? "relative" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}>
          {user && (
            <div className="lg:px-4 py-2 hover:text-blue-500 font-semibold text-lg lg:pl-6">
              <div
                className="flex items-center cursor-pointer hover:text-primary"
                onClick={toggleDropdown}
              >
                <div className="rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center mr-1">
                  <span className="font-semibold" style={{ color: "#15acb1" }}>
                    {user.name[0]}
                  </span>
                </div>
                <span style={{ color: "#15acb1" }}>{userName}</span>
              </div>
              {showDropdown && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 py-2 shadow-lg transition-all duration-300">
                  <li>
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit Profil
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
          {!user && (
            <div className="lg:px-4 py-2 hover:text-blue-500 font-semibold text-lg lg:pl-6">
              <NavLink
                to="/login"
                className="bg-primary text-white rounded-full py-1 px-4 font-medium text-md ml-2 flex justify-center items-center transition duration-300 ease-in-out"
                style={{ backgroundColor: "#15acb1" }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#1f6d79";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#15acb1";
                }}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
