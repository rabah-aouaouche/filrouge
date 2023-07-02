import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/images/logourban.png";
import logodark from "../assets/images/logodark.png";

const Footer = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "mytheme"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Branding
          </Link>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/faq" className="link link-hover">
            Faq
          </Link>
          <Link to="" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/terms-and-conditions" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/refund-policy" className="link link-hover">
            Refund policy
          </Link>
          <Link to="/shipping-policy" className="link link-hover">
            Shipping policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered input-sm w-full pr-16"
              />
              <button className="btn  btn-sm absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center  bg-base-200 ">
        <div>
          <div className="grid grid-flow-col gap-6">
            <Link to="" href="">
              <AiOutlineInstagram className="w-5 h-5 " />
            </Link>
            <Link to="" href="">
              <AiOutlineFacebook className="w-5 h-5 " />
            </Link>
            <Link to="" href="">
              <AiFillTwitterSquare className="w-5 h-5 " />
            </Link>
            <Link to="" href="">
              <FaTiktok className="w-4 h-4 mt-[2px]" />
            </Link>
            <Link to="" href="">
              <AiFillGithub className="w-5 h-5 " />
            </Link>
          </div>
          <Link
            to=""
            className="btn btn-link w-44  normal-case text-xl text-black font-extrabold"
          >
            <img
              src={theme === "darktheme" ? logodark : logo}
              alt=""
              className="w-full h-full object-contain"
            />
          </Link>

          <p>Copyright © 2023 - All right reserved</p>
          <p className=" font-extralight">
            The content of this website is protected by copyright and remains
            the property of Rabah Aouaouche.
          </p>
        </div>
      </footer>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className=" text-black mb-0 flex flex-row justify-center "></div>
      </footer>
    </>
  );
};

export default Footer;
