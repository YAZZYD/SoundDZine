import React from "react";
import "./Footer.css";
import { facebook, instagram, twitter } from "../../assets/import";
function Footer() {
  const socialLinks = [
    { icon: facebook, link: "#" },
    { icon: instagram, link: "#" },
    { icon: twitter, link: "#" },
  ];
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound <span className="red">DZing</span>
            </a>
            <div className="social-links">
              {socialLinks.map((socialLink, index) => (
                <a href={socialLink.link} key={index}>
                  <img src={socialLink.icon} alt="social" />
                </a>
              ))}
            </div>
            <div className="copyrights">
              <span>This website is recreated by IYB Ⓒ 2024</span>
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#"> contact@gmail.com</a>
              </li>
              <li>
                <a href="#">+213 55 09 03 42</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
