import React from "react";
import Facebook from "../assets/icons/footer/facebook.svg";
import Instagram from "../assets/icons/footer/instagram.svg";
import Linkedin from "../assets/icons/footer/linkedin.svg";
import Twitter from "../assets/icons/footer/twitter.svg";

const data = [
  {
    icon: Facebook,
    url: "https://www.facebook.com",
  },
  {
    icon: Instagram,
    url: "https://www.facebook.com",
  },
  {
    icon: Linkedin,
    url: "https://www.facebook.com",
  },
  {
    icon: Twitter,
    url: "https://www.facebook.com",
  },
];

const Footer = () => {
  return (
    <div className="footer pb-0">
      <div className="container h-100">
        <div className="footer_container">
          <ul className="d-flex">
            {["Home", "About", "Program", "Services", "Contact"].map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            {data.map(({ icon, url }, i) => (
              <div key={i} className="social">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={icon} alt={`${icon}`} />
                </a>
              </div>
            ))}
          </div>
          <p>©All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
