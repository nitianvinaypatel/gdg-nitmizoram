import "./Navbar.css";
import icon1 from "../../asset/gdg_logo2.png";
import icon2 from "../../asset/gdg_logo3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ selectTab, setSelectTab }) => {
  const [menu, setMenu] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <img src={icon1} alt="" />
      </div>
      {menu && (
        <div className="nav_menu">
          <ul>
            <li
              className={`${selectTab === "home" ? "active" : ""} l1`}
              onClick={() => {
                setSelectTab("home");
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={`${selectTab === "project" ? "active" : ""} l2`}
              onClick={() => {
                setSelectTab("project");
                navigate("/project");
              }}
            >
              Project
            </li>
            <li
              className={`${selectTab === "event" ? "active" : ""} l3`}
              onClick={() => {
                setSelectTab("event");
                navigate("/event");
              }}
            >
              Event
            </li>
            <li
              className={`${selectTab === "team" ? "active" : ""} l4`}
              onClick={() => {
                setSelectTab("team");
                navigate("/team");
              }}
            >
              Team
            </li>
            {/* <li
              className={`${selectTab === "blog" ? "active" : ""} l5`}
              onClick={() => {
                setSelectTab("blog");
                navigate("/blog");
              }}
            >
              Blogs
            </li> */}
            <li
              className={`${selectTab === "contact" ? "active" : ""} l6`}
              onClick={() => setSelectTab("contact")}
            >
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <div
        className="hamburger"
        onClick={() => {
          setMenu((prev) => !prev);
        }}
      >
        {menu ? (
          <box-icon name="x" size="lg"></box-icon>
        ) : (
          <box-icon name="menu-alt-right" size="lg"></box-icon>
        )}
      </div>
      <div className="logo2">
        <img src={icon2} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
