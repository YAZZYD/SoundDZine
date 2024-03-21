import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <a href="#" className="logo">
        Sound <span className="red">DZing</span>
      </a>
      <ul>
        <li>
          <a href="#">Course Details</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
