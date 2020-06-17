import React from "react";
import "./footer-styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <ul class="foote_bottom_ul_amrc">
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <a href="#about_us">About Us</a>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <a href="#services">FAQ</a>
              </Link>
            </li>
            <li>
              <Link to="/pricing">
                <a href="#blog">Pricing</a>
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                <a href="#contact_us">Contact Us</a>
              </Link>
            </li>
          </ul>
          <div className="container bottom_border" />
          <div
            style={{
              textAlign: "center",

              fontWeight: "600",
              marginTop: "21px",
            }}
          >
            <img
              style={{ width: "14%" }}
              src="data:image/png;base64,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"
              alt=""
            />
            <p style={{ fontSize: "15px" }}>
              SoftVessel (Pvt) Ltd.
              <br />
              60 Cotta Road, Colombo 8, <br />
              Sri Lanka <br />
              +94 779 510 260
              <br />
              +94 112 680 360
              <br />
              Copyright © 2020
            </p>
          </div>
          <ul
            class="social_footer_ul"
            style={{
              textAlign: "center",
              margin: "0px auto",
              paddingLeft: "0px",
            }}
          >
            <li>
              <a href="#facebook">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i class="fab fa-twitter" />
              </a>
            </li>

            <li>
              <a href="#instagram">
                <i class="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
