import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const photos = [
  "https://www.cpplusworld.com/prodassets/banners/6393937c-1646-482f-bcd3-4dda0824685c.jpg",
  "https://www.cpplusworld.com/prodassets/banners/f50a4500-cd98-467c-8786-5051c11753c0.jpg",
  "https://www.cpplusworld.com/prodassets/banners/aa7e7402-f256-4c74-b4b5-9c9a0b859fc2.jpg",
  "https://www.cpplusworld.com/prodassets/banners/97f5dbc4-3ce9-4a0f-b8ee-d66c3ca8a2ab.jpg",
];

export default function PhotoSlider() {
  return (
    <div className="my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}