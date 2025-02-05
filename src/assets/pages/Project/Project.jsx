import { useEffect } from "react";
import "./Project.css";
import idea from "../../asset/idea.jpg";
import design from "../../asset/design.jpg";
import develop from "../../asset/develop.jpg";
import launch from "../../asset/launch.jpg";
import support from "../../asset/support.jpg";
import grow from "../../asset/grow.png";

function Project() {
  useEffect(() => {
    const markers = document.querySelectorAll(".map-marker");

    function animateMap() {
      markers.forEach((marker, index) => {
        gsap.to(marker, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.5,
          ease: "power2.out",
        });
      });
    }

    animateMap();
  }, []);

  return (
    <div className="main">
      <section id="intro">
        <div className="map-container">
          <div className="map-road"></div>
          <div className="map-marker" data-stage="1">
            <img src={idea} alt="Idea" />
            <div className="label">Idea</div>
          </div>
          <div className="map-marker" data-stage="2">
            <img src={design} alt="Design" />
            <div className="label">Design</div>
          </div>
          <div className="map-marker" data-stage="3">
            <img src={develop} alt="Develop" />
            <div className="label">Develop</div>
          </div>
          <div className="map-marker" data-stage="4">
            <img src={launch} alt="Launch" />
            <div className="label">Launch</div>
          </div>
          <div className="map-marker" data-stage="5">
            <img src={support} alt="Support" />
            <div className="label">Support</div>
          </div>
          <div className="map-marker" data-stage="6">
            <img src={grow} alt="Grow" />
            <div className="label">Grow</div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h1 className="project-heading">Our Projects</h1>

        <div>
          <h2 className="text-center text-2xl p-8">Comming soon</h2>
        </div>
        {/* <div className="projects-container">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map(
            (project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image"></div>
                <div className="project-info">
                  <h2>{project}</h2>
                  <p>
                    Short description of the project. Enter the short details
                    about project here.
                  </p>
                  <a href="#">View Project</a>
                </div>
              </div>
            )
          )}
        </div> */}
      </section>
    </div>
  );
}

export default Project;
