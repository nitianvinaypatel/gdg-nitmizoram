import "./DomainList.css";
import aiml from "../../asset/aiml.png";
import appdevelopment from "../../asset/appdevelopment.png";
import backend from "../../asset/backend.png";
import blockchain from "../../asset/blockchain.png";
import cloud from "../../asset/cloud.png";
import cybersecurity from "../../asset/cybersecurity.png";
import data_analyst from "../../asset/data_analyst.png";
import data_science from "../../asset/data_science.png";
import deeplearning from "../../asset/deeplearning.png";
import frontend from "../../asset/frontend.png";
import game from "../../asset/game.png";
import graphics_designer from "../../asset/graphics_designer.png";
import uiux from "../../asset/uiux.png";
import webdevelopment from "../../asset/webdevelopment.png";
import DomainCard from "../../components/DomainCard/DomainCard";
import devops from "../../asset/images.png";

const DomainList = ({ toggleFilterSpeciality, setSelectTab }) => {
  const domains = [
    {
      image: aiml,
      title: "AI & ML",
      speciality: "AI/ML",
      description:
        "Explore the world of Artificial Intelligence and Machine Learning with cutting-edge algorithms and models.",
    },
    {
      image: appdevelopment,
      title: "App Development",
      speciality: "Android Development",
      description:
        "Learn how to build powerful mobile applications across Android and iOS platforms.",
    },
    {
      image: backend,
      title: "Backend Development",
      speciality: "Backend Development",
      description:
        "Master server-side technologies, APIs, and databases to create dynamic, data-driven web applications.",
    },
    {
      image: blockchain,
      title: "Blockchain",
      speciality: "Blockchain Developer",
      description:
        "Dive into the world of decentralized systems, cryptocurrencies, and smart contracts.",
    },
    {
      image: cloud,
      title: "Cloud Computing",
      speciality: "Cloud Computing",
      description:
        "Understand cloud platforms like AWS, Azure, and Google Cloud to build scalable and efficient systems.",
    },
    {
      image: cybersecurity,
      title: "Cybersecurity",
      speciality: "Cybersecurity",
      description:
        "Learn about network security, ethical hacking, and protection of digital assets.",
    },
    {
      image: data_analyst,
      title: "Data Analysis",
      speciality: "Data Analyst",
      description:
        "Master the tools and techniques for analyzing and interpreting large datasets to extract insights.",
    },
    {
      image: data_science,
      title: "Data Science",
      speciality: "Data Science",
      description:
        "Leverage statistics, machine learning, and data analysis to make informed decisions in business and research.",
    },
    {
      image: deeplearning,
      title: "Deep Learning",
      speciality: "Deep Learning",
      description:
        "Learn advanced techniques in neural networks and their applications in AI systems.",
    },
    {
      image: devops,
      title: "DevOps",
      speciality: "DevOps",
      description:
        "DevOps combines development and operations to automate workflows, enabling faster and more reliable software delivery through continuous integration and deployment.",
    },
    {
      image: frontend,
      title: "Frontend Development",
      speciality: "Frontend Developer",
      description:
        "Build visually stunning user interfaces using HTML, CSS, and JavaScript for responsive websites.",
    },
    {
      image: game,
      title: "Game Development",
      speciality: "Game Developer",
      description:
        "Create interactive and engaging video games using game engines like Unity and Unreal Engine.",
    },
    {
      image: graphics_designer,
      title: "Graphics Design",
      speciality: "Graphic Designer",
      description:
        "Design visual content such as logos, illustrations, and layouts using design tools like Adobe Illustrator.",
    },
    {
      image: uiux,
      title: "UI/UX Design",
      speciality: "UI/UX",
      description:
        "Focus on user interface and experience design to create user-friendly and aesthetically pleasing applications.",
    },
    {
      image: webdevelopment,
      title: "Web Development",
      speciality: "Web Development",
      description:
        "Build full-stack web applications using technologies like HTML, CSS, JavaScript, React, and Node.js.",
    },
  ];

  return (
    <div className="domain-container">
      <h1>Our Domains</h1>
      <div className="domain-list">
        {domains.map((domain, index) => (
          <DomainCard
            key={index}
            image={domain.image}
            title={domain.title}
            description={domain.description}
            speciality={domain.speciality}
            toggleFilterSpeciality={toggleFilterSpeciality}
            setSelectTab={setSelectTab}
          />
        ))}
      </div>
    </div>
  );
};

export default DomainList;
