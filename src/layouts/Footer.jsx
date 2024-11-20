import React from "react";
import LOGO from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="w-full p-3 lg:max-w-[1200px] mx-auto lg:p-0">
      <div className="flex p-2 flex-col md:flex-row gap-12 lg:p-2 xl:p-0">
        <div className="flex flex-col gap-1 w-full">
          <img className="h-[150px] object-contain" src={LOGO} alt="" />
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-center md:text-start w-full flex-3">
            <div>
                <h5 className="font-medium mb-4 text-[20px]">Categories</h5>
                <ul>
                    <li>International</li>
                    <li>Regional</li>
                    <li>Politics</li>
                    <li>Business</li>
                    <li>Sports</li>
                    <li>Health</li>
                </ul>
            </div>
            <div>
                <h5 className="font-medium mb-4 text-[20px]">Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h5 className="font-medium mb-4 text-[20px]">Social Media</h5>
                <ul>
                    <li>Youtube</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
