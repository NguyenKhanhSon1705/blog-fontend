// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Title from "../Title/Title";
import PostItem from "../Post/PostItem";
import PaginationPost from "../Pagination/PaginationPost";
const SliderPost = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-10 px-3 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 p-3 xl:p-0 gap-4 lg:gap-0">
        <Title title={"Recommended For You"} />
        <PaginationPost />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderPost;
