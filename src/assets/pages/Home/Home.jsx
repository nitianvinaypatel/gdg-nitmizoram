import "./Home.css";
import Header from "../../components/Header/Header";
import DomainList from "../DomainList/DomainList";

const Home = ({ toggleFilterSpeciality, setSelectTab }) => {
  return (
    <div className="">
      <Header></Header>
      <DomainList
        toggleFilterSpeciality={toggleFilterSpeciality}
        setSelectTab={setSelectTab}
      />
    </div>
  );
};

export default Home;
