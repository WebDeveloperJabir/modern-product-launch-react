import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="logo-place">
        <p className="logo-text">Area</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Benefits</a>
          </li>
          <li>
            <a href="">Specifications</a>
          </li>
          <li>
            <a href="">How-to</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="side-button">
        <button>
          Learn More <div className="arrow-sign">↗</div>
        </button>
      </div>
    </header>
  );
}
