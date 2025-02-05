import "./Footer.css";
import logo from "../../asset/gdg_logo.png";
import { useNavigate } from "react-router-dom";

const Footer = ({ setSelectTab }) => {
  const navigate = useNavigate();
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="left">
          <img src={logo} alt="" />
          <p>
            GDG NIT Mizoram is an independent group and is not directly
            affiliated with Google.
          </p>
          <div className="social-icons">
            <div className="icons">
              {" "}
              <a
                href="https://www.linkedin.com/company/gdg-nit-mizoram/"
                target="_blank"
              >
                <box-icon
                  type="logo"
                  name="linkedin-square"
                  size="lg"
                  color="#d9d9d9"
                ></box-icon>
              </a>
            </div>
            <div className="icons">
              {" "}
              <box-icon
                type="logo"
                name="github"
                size="lg"
                color="#d9d9d9"
              ></box-icon>
            </div>
            <div className="icons">
              {" "}
              <a href="https://www.instagram.com/gdg.nitmz/" target="_blank">
                <box-icon
                  type="logo"
                  name="instagram-alt"
                  size="lg"
                  color="#d9d9d9"
                ></box-icon>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Contact Us</h2>
          <ul>
            <li>+919305346457</li>
            <li>
              <a mailto="gdg.nitmz.ac.in">gdg@nitmz.ac.in</a>
            </li>
          </ul>
        </div>
        <div className="center">
          <h2>Dierct Links</h2>
          <ul>
            <li
              onClick={() => {
                navigate("/");
                setSelectTab("home");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/project");
                setSelectTab("project");
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                navigate("/event");
                setSelectTab("event");
              }}
            >
              Events
            </li>
            <li
              onClick={() => {
                navigate("/blog");
                setSelectTab("blog");
              }}
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 &copy; GDG-NIT MIZORAM. || All rights reserved
      </p>
    </div>
  );
};
export default Footer;
