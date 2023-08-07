"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Allproductjson from "./Allproductsjson";
import "swiper/css";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function page() {
  const data = Allproductjson;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      //   onAutoplay={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <SwiperSlide>
              <Link href={`/pages/product/${item.id}`}>
                <div className=" w-full  justify-between hover:scale-110 hover:ease-in duration-300 cursor-pointer ">
                  <div className="bg-[#d7d7d9]  flex justify-center items-end">
                    <Image src={item.image} height={350} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <strong> {item.heading}</strong>
                    <p>{item.subheading}</p>
                    <strong>{item.price}</strong>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
}
