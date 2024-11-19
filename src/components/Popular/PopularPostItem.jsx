import React from "react";
import { Link } from "react-router-dom";

const PopularPostItem = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-[90px] flex-2">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1670426500795-0a23331c19d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 flex-1 text-white p-1 w-full">
        <div className="flex gap-2">
          <span>Innovation</span>
          <span>2 Hours ago</span>
        </div>
        <Link className="text-xl text-wrap">
            <p>7 Ways You Can Reduce Climate Change</p>
        </Link>
      </div>
    </div>
  );
};

export default PopularPostItem;
