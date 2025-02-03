import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../index.css"

const Footer = () => {
  return (
    <footer>
      <div className="FSectoins">
        <div className="Touch">
          <h2>Get In Touch</h2>
          <h5>Lorem ipsum dolor sit amet</h5>
          <div className="Social">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div className="CompanyInfo">
          <h2>Company Info</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Carrier</a>
            </li>
            <li>
              <a href="#">We are hiring</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="Features">
          <h2>Features</h2>
          <ul>
            <li>
              <a href="#">Business Marketing</a>
            </li>
            <li>
              <a href="#">User Analytic</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Unlimited Support</a>
            </li>
          </ul>
        </div>

        <div className="Features">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Watch a Demo</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        @ 2025 | all rights reserved made by <span>Abdalrhamn Aboalela</span>
      </p>
    </footer>
  );
};

export default Footer;
