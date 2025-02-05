import { useNavigate } from "react-router-dom";
import "./DomainCard.css";

const DomainCard = ({
  image,
  title,
  description,
  toggleFilterSpeciality,
  speciality,
  setSelectTab,
}) => {
  const navigate = useNavigate();

  const handleTeamClick = () => {
    toggleFilterSpeciality(speciality);
    navigate("/team");
    setSelectTab("team");
  };

  return (
    <div className="gdgcard" data-aos="zoom-in-up">
      <img src={image} alt="" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="btn-container">
          <button onClick={handleTeamClick}>Team</button>
          <button
            onClick={() => {
              navigate("/project");
              setSelectTab("project");
            }}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
