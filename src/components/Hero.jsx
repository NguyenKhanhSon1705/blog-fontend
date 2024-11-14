import React from "react";
import PopularPost from "./Popular/PopularPost";

const Hero = () => {
  return (
    <div className="w-full bg-[#909090]">
      <div className="w-full max-w-[1200px] py-4 px-3 mx-auto flex flex-col sm:flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:py-9">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-center gap-2 ">
            <span className="text-white">Innovation</span>
            <span className="text-white">2 Hours ago</span>
          </div>
          <h1 className="text-4xl text-white font-medium">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock
          </h1>
        </div>

        <div className="bg-[#fff] bg-opacity-15 rounded-md p-4 flex-1">
            <h3 className="text-white text-2xl font-medium">Popular this week</h3>
            <div className="mt-3">
                <PopularPost/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
