import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <footer className="bg-customBlue text-white py-6">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="#"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-customBlue hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-customBlue hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-customBlue hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-customBlue hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-customBlue hover:text-white"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/schemes" className="hover:underline">
            Schemes
          </Link>
          <Link to="/feedback" className="hover:underline">
            Feedback
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm">
          <p>© 2024 GUIDEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
