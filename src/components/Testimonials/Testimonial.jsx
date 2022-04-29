import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " He is focused, reliable, and goal-oriented, which inspired us all to be more like him and always do our best. He is kind and an outstanding person and knows how to bring the best out of each person",
    },
    {
      img: profilePic2,
      review:
        "There is no better colleague than Sunil. He is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. His expertise as a developer is considerable, and it helped our team come up with more efficient solutions on different projects.",
    },
    {
      img: profilePic3,
      review:
        "I started my programming journey along with him, and he helped me understand the concepts. His work ethics are pristine, and he is easily adjustable to a given situation. His ability to go out of his way to help others has made him stand out. Thanks a lot, man! You made the Masai journey smooth and more comfortable.",
    },
    {
      img: profilePic4,
      review:
        "He is smart and handles every situation very carefully and in the right manner. He is punctual, hard-working, and has a good network for various business opportunities. I highly recommend working with him to get the best out of everything.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>“Your Friends Do Matter.”</span>
        <span> what people get </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
