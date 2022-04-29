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
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
    
      <div className="section">
       
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Youtube}
                  alt="Youtube"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube</h2>
              <p>
                Clone of the popular entertainment video site Youtube. Built on HTML , CSS for front end and used official youtube API. It's an individual project executed in 1 day.
              </p>
              <div>
                
                <SiHtml5 />
                <IoLogoJavascript />
               
              </div>
              <div>
                <a
                  href="https://astonishing-stardust-e63665.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/skbiswal01/Youtube-clone-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={myntra}
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Myntra Clone</h2>
              <p>
                First Backend Project with NodeJS, ExpressJS and MongoDB. Used EJS to render views. Main functionalities were : Register/Login using JWT, Sorting and Filtering in the backend, Cart and Wish List and many more.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://sk-myntra.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/skbiswal01/Mynta-Full-Stack-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={food}
                  alt="food website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>food website</h2>
              <p>
              A solo project on providing information of food receipe. Backend API for fetching data  
              </p>
              <div>
                <SiTailwindcss />
                <SiHtml5 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="sleepy-neumann-26057b.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    URL for the API
                  </button>
                </a>
                <a
                  href="https://github.com/skbiswal01/Food-recipe-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={icoder}
                  alt="icoder"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>icoder</h2>
              <p>
                Mini project of A classic blog website built using bootstrap. 
              </p>
              <div>
                <SiJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://zealous-brattain-f33b87.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/skbiswal01/Blog-site-using-Bootstrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bewakoof}
                  alt="bewakoof"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bewakoof.com clone</h2>
              <p>
                A project on famous printed articles T-shirt e-commerce website build using simple tech stack executed in 5 days;
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://cloneofbewakoof.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/AmbujKrAK/Bewakoof.com--Project-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
     
         <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={news}
                  alt="news site"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>News website</h2>
              <p>
                my first project build using react Js and using API server calls build in 2 days
              </p>
              <div>
                <SiReactrouter />

              </div>
              <div>
                <a
                  href="https://imaginative-sherbet-909200.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    See this live
                  </button>
                </a>
                <a
                  href="https://github.com/skbiswal01/news-app-react-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="button i-button">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
