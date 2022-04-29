import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sk.biswal01@outlook.com</span>
        <div className="f-icons">
         
          <a href="https://www.linkedin.com/in/sunil-kumar-biswal/" rel="noreferrer" target={"_blank"}><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/skbiswal01" rel="noreferrer" target={"_blank"}><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
