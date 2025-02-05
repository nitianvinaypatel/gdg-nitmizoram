import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Logo from "./assets/pages/Logo/Logo";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/pages/Home/Home";
import Project from "./assets/pages/Project/Project";
import Event from "./assets/pages/Event/Event";
import Member from "./assets/pages/Member/Member";
import BlogApp from "../Blogger/src/BlogApp"; // Import BlogApp from Project 2
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [icon, setIcon] = useState(true);
  const [selectTab, setSelectTab] = useState("home");
  const [filterSpeciality, setFilterSpeciality] = useState("");
  const [filterPosition, setFilterPosition] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIcon(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFilterSpeciality = (speciality) => {
    setFilterSpeciality((prev) => (prev === speciality ? "" : speciality));
  };

  return (
    <BrowserRouter>
      {" "}
      {/* Single Router wrapper for the entire app */}
      <div className="app-container">
        {icon ? (
          <Logo />
        ) : (
          <div className="home-container">
            <Navbar selectTab={selectTab} setSelectTab={setSelectTab} />
            <Routes>
              {/* Routes for Project 1 */}
              <Route
                path="/"
                element={
                  <Home
                    toggleFilterSpeciality={toggleFilterSpeciality}
                    setSelectTab={setSelectTab}
                  />
                }
              />
              <Route path="/project" element={<Project />} />
              <Route path="/event" element={<Event />} />
              <Route
                path="/team"
                element={
                  <Member
                    filterSpeciality={filterSpeciality}
                    setFilterSpeciality={setFilterSpeciality}
                    filterPosition={filterPosition}
                    setFilterPosition={setFilterPosition}
                    toggleFilterSpeciality={toggleFilterSpeciality}
                  />
                }
              />
              {/* Routes for Project 2 */}
              <Route path="/blog/*" element={<BlogApp />} />{" "}
              {/* Wildcard route for BlogApp */}
              {/* Specific redirects for Project 2 */}
              <Route path="/:id" element={<Navigate to="/blog/:id" />} />
              <Route
                path="/author/:auth_name"
                element={<Navigate to="/blog/author/:auth_name" />}
              />
              <Route
                path="/myprofile"
                element={<Navigate to="/blog/myprofile" />}
              />
              <Route
                path="/addpost"
                element={<Navigate to="/blog/addpost" />}
              />
              <Route
                path="/deletepost"
                element={<Navigate to="/blog/deletepost" />}
              />
              <Route path="/login" element={<Navigate to="/blog/login" />} />
            </Routes>
            <Footer setSelectTab={setSelectTab} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
