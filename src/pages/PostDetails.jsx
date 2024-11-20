// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import PostComment from "../components/PostComment";


const PostDetails = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-3 lg:my-32 p-5 lg:p-0">
      <div className="flex flex-row gap-2 items-center mb-3 text-gray-500">
        <span className="font-medium">Innovation</span>
        <span className="font-medium">2 Hours ago</span>
      </div>

      <div className="w-full max-w-[900px] text-black font-medium">
        <p className="lg:text-6xl text-2xl">
          Charge Two Devices at the Same Time With This Magnetic Wireless
          Charging Dock
        </p>
      </div>

      <div className="flex gap-4 items-center my-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="author"
        />
        <span className="text-md font-medium">Cameron Williamson</span>
      </div>

      <div className="flex my-6 gap-6">
        <div className="flex gap-1 items-center">
          <CiHeart className="text-3xl text-blue-500" />
          <span className="text-md">521K</span>
        </div>
        <div className="flex gap-1 items-center">
          <LuMessageSquare className="text-3xl text-blue-300" />
          <span className="text-md">213</span>
        </div>
        <div className="flex gap-1 items-center">
          <CiShare2 className="text-3xl text-blue-500" />
          80
        </div>
      </div>

      <div className="w-full mt-12">
        <img
          className="w-full  lg:h-[700px] object-cover"
          src="https://images.unsplash.com/photo-1731575115709-d4325615e868?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex flex-col mt-14 w-full max-w-[1000px]">
        <p className="text-md lg:text-lg">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring. Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital divide with
          additional clickthroughs from DevOps. Nanotechnology immersion along
          the information highway will close the loop on focusing solely on the
          bottom line. Leverage agile frameworks to provide a robust synopsis
          for high level overviews. Iterative approaches to corporate strategy
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic innovation via workplace
          diversity and empowerment. Bring to the table win-win survival
          strategies to ensure proactive domination. At the end of the day,
          going forward, a new normal that has evolved from generation X is on
          the runway heading towards a streamlined cloud solution. content in
          real-time will have multiple touchpoints for offshoring. Capitalize on
          low hanging fruit to identify a ballpark value added activity to beta
          test. Override the digital divide with additional clickthroughs from
          DevOps. Nanotechnology immersion along the information
        </p>
        <br />
        <p className="text-md lg:text-lg">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring. Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital divide with
          additional clickthroughs from DevOps. Nanotechnology immersion along
        </p>

        <br />
        <p className="text-md lg:text-lg">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
        </p>
      </div>

     {/* Comments */}
     <PostComment/>
    </div>
  );
};

export default PostDetails;
