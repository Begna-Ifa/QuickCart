import React from "react";
import { assets } from "assets/assets";
import myLogo from "assets/myLogo.webp"; 
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="QuickCart Logo" />
          <p className="mt-6 text-sm">
            QuickCart is your one-stop solution for seamless, fast, and reliable online shopping. Our mission is to revolutionize the e-commerce 
            experience by offering a user-friendly interface, a vast selection of high-quality products, and lightning-fast deliveries.
            Whether you need groceries, electronics, or fashion essentials, QuickCart ensures hassle-free transactions and top-notch customer service, 
            making every purchase a delight.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +251954617535
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> wakisabirhanu@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm flex items-center justify-center gap-2">
        <Image src={myLogo} alt="Waaqo Dev Logo" className="inline-block h-8 w-auto md:w-32"/>
        Copyright {new Date().getFullYear()} © Waaqo Dev. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
