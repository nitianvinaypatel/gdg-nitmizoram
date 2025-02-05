import { useEffect } from "react";
import "./Project.css";
import idea from "../../asset/idea.jpg";
import design from "../../asset/design.jpg";
import develop from "../../asset/develop.jpg";
import launch from "../../asset/launch.jpg";
// support from "../../asset/support.jpg";
// grow from "../../asset/grow.png";

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

  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-fledged e-commerce website with product listings, cart, and payment integration.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Task Manager App",
      description:
        "A productivity tool to help users track tasks, deadlines, and progress.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      name: "Social Media Dashboard",
      description:
        "A centralized dashboard to monitor multiple social media accounts and analytics.",
      image:
        "https://images.klipfolio.com/website/public/1cf5beca-9248-4784-af79-3caed6b1f2cd/social-media-dashboard.png",
    },
    {
      name: "Fitness Tracker",
      description:
        "An app to track daily workouts, calories, and health progress.",
      image:
        "https://cdn.macstories.net/monday-15-may-2023-11-22-24-1684164319570.png",
    },
  ];

  return (
    <div className="main">
      {/* <section id="intro">
        <div className="map-container">
          <div className="map-road"></div>
          {projects.map((project, index) => (
            <div className="map-marker" data-stage={index + 1} key={index}>
              <img src={project.image} alt={project.name} />
              <div className="label">{project.name}</div>
            </div>
          ))}
        </div>
      </section> */}
      <section id="projects">
        <h1>Our Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href="#">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
