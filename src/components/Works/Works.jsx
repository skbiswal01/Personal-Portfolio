import React, { useContext } from "react";
import "./Works.css";
import next from "../../img/next.png";
import express from "../../img/express.png";
import mongo from "../../img/mongo.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
import Experience from "../Experience/Experience";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <>
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Skilled at operating with
          </span>
          <span>range of Tech Stack</span>
          <span>
          Knowledge of developing Restful web services with Express and NodeJS.
            <br />
            Deep understanding with advanced Javascript concepts, such as Prototype, Closure and Promise.
            <br />
            Strong knowledge of MongoDB as well as SQL server
            <br/>
             and write SQL queries, stored procedures and data base normalizations.
            <br />
            Team player with excellent communication, Trouble shooting, Debugging and 
            <br/>
            Strong analytical problem solving skills to deliver Technology products and consulting solutions.
          </span>
         
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={node} alt=""  style={{height:"150px", borderRadius : "50%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={express} alt="" style={{height:"150px",borderRadius : "50%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={react} alt=""  style={{height:"150px",borderRadius : "50%"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={mongo} alt=""  style={{height:"150px", width:"150px", borderRadius : "50%"}} />
          </div>
          <div className="w-secCircle">
            <img src={next} alt=""  style={{height:"150px",borderRadius : "50%"}}/>
          </div>
          
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div> 
    </div>
    <Experience/>
    </>
  );
};

export default Works;
