import React from "react";

const PostItem = () => {
  return (
    <div className="w-full rounded-sm flex flex-col gap-3">
      <div className="relative w-full h-[200px] bg-black">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1731287011824-1a51da402685?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="post"
        />
        <span className="block absolute bottom-0 left-0 bg-white text-black p-2 font-normal">
          Science
        </span>
      </div>
      <div className="w-full p-2">
        <p className="text-2xl font-medium cursor-pointer">
          Charge Two Devices at the Same Time With This Magnetic Wireless
          Charging Dock
        </p>

        <div className="flex flex-row gap-4 mt-5">
          <span className="block font-medium text-gray-500">Floyd Miles</span>
          <span className="block font-medium text-gray-500">3 Days Ago</span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
