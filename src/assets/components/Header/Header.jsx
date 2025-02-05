import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-header">
        <div className="left-side">
          <div className="top-edge"></div>
          <div className="bottom-edge"></div>
        </div>
        <div className="right-side">
          <h2>We are a </h2>
          <ul>
            <li style={{ color: "red" }}>Team</li>
            <li style={{ color: "blue" }}>Developer</li>
            <li style={{ color: "green" }}>Innovator</li>
            <li style={{ color: "yellow" }}>Creator</li>
          </ul>
        </div>
      </div>
      <div className="bottom-header">
        <div className="left-side">
          <h2>Google Developer Group , NIT Mizoram</h2>
          <p>
            Google Developer Group (GDG) at NIT Mizoram is a student-led
            community that promotes learning and innovation in technology. It
            organizes workshops, hackathons, and events focused on Google’s
            developer tools like Android, Firebase, Web, Cybersecurity, AI/ML
            and Google Cloud. GDG NIT Mizoram provides students with
            opportunities to enhance their skills, connect with tech
            professionals, and stay updated on the latest trends aspiring
            developers.
          </p>
        </div>
        <div className="right-side">
          <div className="top-edge"></div>
          <div className="bottom-edge"></div>
        </div>
      </div>
      <div className="about">
        <p>
          Google Developer Group (GDG) in Campus at NIT Mizoram is a student-led
          community that focuses on creating a collaborative environment for
          students interested in technology, software development, and Google’s
          developer tools and technologies. The group organizes events,
          workshops, and hackathons to promote learning, innovation, and skill
          development among the student community. GDG NIT Mizoram aims to
          provide an open space where aspiring developers, tech enthusiasts, and
          budding entrepreneurs can connect, collaborate, and stay updated with
          the latest trends in tech. Through regular meetups, discussions, and
          hands-on sessions, GDG NIT Mizoram helps students enhance their
          knowledge of Google’s ecosystem, including Android, Firebase, Google
          Cloud, and TensorFlow, among others. The group also encourages
          networking opportunities with professionals, mentors, and like-minded
          individuals, fostering an atmosphere of creativity and
          problem-solving. As part of the global GDG network, GDG NIT Mizoram is
          also involved in community-driven events, such as Google I/O Extended,
          where students can experience live streams of Google’s annual
          developer conference, participate in local coding challenges, and gain
          insights into the future of technology. The campus chapter of GDG
          serves as a vital platform for students at NIT Mizoram to develop
          their skills and prepare for careers in the rapidly evolving tech
          industry.
        </p>
      </div>
    </div>
  );
};

export default Header;
