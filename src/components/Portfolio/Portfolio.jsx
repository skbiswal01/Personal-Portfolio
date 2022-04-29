import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import news from "../../img/news.png";
import myntra from "../../img/myntra.png";
import bewakoof from "../../img/bewakoof.png";
import Youtube from "../../img/youtube.png";
import icoder from "../../img/icoder.png";
import food from "../../img/food.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://astonishing-stardust-e63665.netlify.app/" rel="noreferrer" target={"_blank"}><img src={Youtube} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sk-myntra.netlify.app/" rel="noreferrer" target={"_blank"}><img src={myntra} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sleepy-neumann-26057b.netlify.app/" rel="noreferrer" target={"_blank"}><img src={food} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://zealous-brattain-f33b87.netlify.app/" rel="noreferrer" target={"_blank"}><img src={icoder} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://copybewakoof.netlify.app/" rel="noreferrer" target={"_blank"}><img src={bewakoof} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=""><img src={news} alt="" style={{height: "200px"}}/></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
