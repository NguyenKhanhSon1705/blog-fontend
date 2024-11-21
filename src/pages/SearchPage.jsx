// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title/Title";
import { CiSearch } from "react-icons/ci";
import PostItem from "../components/Post/PostItem";
const SearchPage = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      {/* Search Box */}
      <div className="flex items-center md:w-2/3 w-full mx-auto gap-4 mt-6 p-2 md:p-0">
        <div className="flex-1">
          <input
            className="w-full text-xl h-full px-6 py-4 outline-none border border-gray-600 rounded-md"
            placeholder="Search..."
          />
        </div>
        <button className="w-[80px] bg-red-500 text-white flex justify-center items-center h-[60px] rounded-md">
          <CiSearch className="text-2xl font-semibold" />
        </button>
      </div>

      {/* Ket qua tim kiem */}
      <div className="my-10 flex flex-col">
        <div className="flex justify-between items-center p-3 mb-4 xl:p-0">
          <Title title={"Results..."} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3 xl:p-0">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
