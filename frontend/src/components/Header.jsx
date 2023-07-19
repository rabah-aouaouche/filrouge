import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsArrowThroughHeart, BsPhoneVibrate } from "react-icons/bs";
import logo from "../assets/images/logourban.png";
import logodark from "../assets/images/logodark.png";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getUserCart } from "../features/user/userSlice";
import { getAProduct } from "../features/product/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [total, setTotal] = useState(null);

  const productState = useSelector((state) => state?.product?.product);
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    let data = [];

    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }

    setProductOpt(data);
  }, [productState]);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "mytheme"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("darktheme");
    } else {
      setTheme("mytheme");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header className="">
        <div className=" bg-black ">
          <Marquee speed={60} gradient={false} pauseOnHover>
            <div className=" flex flex-row items-center justify-around  bg-black gap-20">
              <div className=" text-white mb-0 flex flex-row gap-3 hidden md:flex lg:flex ">
                <Link to="">
                  <AiOutlineInstagram />
                </Link>
                <Link to="">
                  <AiOutlineFacebook />
                </Link>
                <Link to="">
                  <AiFillTwitterSquare />
                </Link>
                <Link to="">
                  <FaTiktok className="w-3 h-3 mt-[2px] " />
                </Link>
                <Link to="">
                  <AiFillGithub />
                </Link>
              </div>
              <div>
                <p className=" text-white ">
                  use <span className=" text-gray-600">MIOOD20 </span>
                  code to get 20% discount
                </p>
              </div>
              <div className="text-white flex flex-row">
                <Link to="tel:+213 657510069" className=" pt-1 pr-2 ">
                  <BsPhoneVibrate />
                </Link>
                <p className="hidden md:flex lg:flex">
                  <Link to="tel:+213 657510069">+213 657510069</Link>
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </header>
      <nav>
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  "
              >
                {/* search input for the humburger */}

                <div className="form-control md:hidden lg:hidden ">
                  <div className="input-group input-group-xs">
                    <input
                      type="text"
                      placeholder="Search Product Here.."
                      className="input input-bordered input-xs"
                    />
                    <button className="btn btn-square btn-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* end search input for the humburger */}
                <li className="border-b">
                  <Link to="/">Home</Link>
                </li>
                <li className="border-b">
                  <Link to="/product">Our Store</Link>
                </li>
                <li className="border-b">
                  <Link to="/my-orders">My Orders</Link>
                </li>
                <li className="border-b">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="border-b">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="border-b">
                  <Link to="/contact">Contact</Link>
                </li>

                <li className="border-b">
                  <Link to="/compare-product">Compare product</Link>
                </li>

                {/* social media for the humburger */}

                <div className=" text-black mb-0 flex flex-row gap-3 justify-center md:hidden lg:hidden  ">
                  <Link to="">
                    <AiOutlineInstagram />
                  </Link>
                  <Link to="">
                    <AiOutlineFacebook />
                  </Link>
                  <Link to="">
                    <AiFillTwitterSquare />
                  </Link>
                  <Link to="">
                    <FaTiktok className="w-3 h-3 mt-[2px]" />
                  </Link>
                  <Link to="">
                    <AiFillGithub />
                  </Link>
                </div>

                {/* END of social media for the humburger */}
              </ul>
            </div>
          </div>
          <div className="navbar-center flex flex-col items-center">
            <Link
              to=""
              className="btn btn-link w-44  normal-case text-xl text-black font-extrabold"
            >
              <img
                src={theme === "darktheme" ? logodark : logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="navbar-end flex items-center">
            {/* search input */}

            {/* <div className="input-container hidden md:flex lg:flex right-5 ">
              <form onSubmit={(e) => alert("fjljl")}>
                <input
                  placeholder="Enter text"
                  className="input-field "
                  type="search"
                />
                <label htmlFor="input-field" className="input-label">
                  Enter text
                </label>
                <span className="input-highlight"></span>
              </form>
            </div> */}

            <div className="input-container hidden md:flex lg:flex right-5 bg-transparent ">
              <form
                onSubmit={(e) => alert("fjljl")}
                className=" bg-transparent"
              >
                <Typeahead
                  className="input-field bg-transparent"
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  options={productOpt}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  labelKey={"name"}
                  minLength={2}
                  paginate={paginate}
                  placeholder="search..."
                />
                <label
                  htmlFor="input-field"
                  className="input-label bg-transparent"
                >
                  Enter text
                </label>
                <span className="input-highlight bg-transparent"></span>
              </form>
            </div>

            {/* end search input */}
            {/* wishlist */}
            <Link to="/wishlist">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <BsArrowThroughHeart className="h-5 w-5" />
                </div>
              </label>
            </Link>

            {/* end of wishlist */}
            {/* Theme mode */}
            <label className="swap swap-rotate  ">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "mytheme" ? false : true}
              />

              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* end of theme mode  */}

            {/* CART */}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {authState?.user === null ? (
                      <span></span>
                    ) : (
                      <span className="badge badge-sm indicator-item bg-[#d97b3e]">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                    )}
                    {/* <span className="badge badge-sm indicator-item">
                      {cartState?.length ? cartState?.length : 0}
                    </span> */}
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      {cartState?.length ? cartState?.length : 0} Items
                    </span>
                    <span className="text-info">
                      Subtotal: {total ? total : 0} Da
                    </span>
                    <div className="card-actions">
                      <Link to="/cart">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF CART */}

            {/* -------- PROFILE AND LOGIN  ----------*/}

            {authState?.user === null ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <FiUser className="w-5 h-5" />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link
                      to={authState?.user === null ? "/login" : "/my-profile"}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle flex items-center justify-center"
                >
                  <div className=" rounded-full flex items-center justify-center  ml-2 flex-col ">
                    <h5 className="text-[7px]">Welcome</h5>
                    <h2 className="text-[10px]">
                      {authState?.user?.firstname}
                    </h2>
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/my-profile">Profile</Link>
                  </li>
                  <li>
                    <button
                      className="  border-0 bg-transparent "
                      type="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* END OF PROFILE AND LOGINE */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
