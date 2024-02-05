import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Slide from "../components/Slide";
import { Navigation } from "swiper/modules";
const data = [
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
  {
    comment:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua elit sit amet.",
    name: "John Doe",
    title: "Founder and CEO",
  },
];

const Testimonials = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  let testimonialIndex =
    width < 500 ? 1 : width < 993 ? 2 : width < 1300 ? 3 : 4;

  return (
    <div className="testimonials_container">
      <div className="container ">
        <p className="text-center mb-2">Testimonials</p>
        <h1 className="text-center mb-5">What clients say about us</h1>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={testimonialIndex}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
