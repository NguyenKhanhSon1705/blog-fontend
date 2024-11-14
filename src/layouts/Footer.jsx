import React from "react";
import LOGO from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex p-2 flex-col md:flex-row gap-12 md:p-0">
        <div className="flex flex-col gap-1 w-full">
          <img className="h-[150px] object-contain" src={LOGO} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-start w-full flex-3">
            <div>
                <h5 className="font-medium mb-4">Categories</h5>
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
                <h5 className="font-medium mb-4">Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h5 className="font-medium mb-4">Social Media</h5>
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
