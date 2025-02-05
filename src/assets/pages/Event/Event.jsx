import "./Event.css";
import { useState } from "react";
import impact1 from "../../asset/impact-1.jpg";
import impact2 from "../../asset/impact-2.png";
import impact3 from "../../asset/illustration.png";
import event1 from "../../asset/event-1.png";
import event2 from "../../asset/event-2.png";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("all");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const events = [
    {
      title: "GDG Orientation Day",
      date: "January 20, 2025",
      description:
        "A full-day developer conference featuring hands-on workshops, speaker sessions on Google technologies, and networking opportunities for tech enthusiasts.",
      imageUrl: event1, // Replace with actual image URL
      year: "2025",
    },
    {
      title: "Flutter Forward Workshop",
      date: "March 10, 2025",
      description:
        "An interactive workshop exploring Flutter's latest updates, covering state management, animations, and Firebase integration for cross-platform app development.",
      imageUrl: event2, // Replace with actual image URL
      year: "2025",
    },
  ];

  return (
    <div>
      <section id="hero">
        <div className="hero-content">
          <h2>Welcome to Our Events</h2>
          <p>
            Discover how our events can change your perspective and impact your
            life.
          </p>
        </div>
      </section>

      <section className="year-filter">
        <label htmlFor="year-filter">Filter by Year:</label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="all">All Years</option>
        </select>
      </section>

      <section className="illustration">
        <div className="illustration-part">
          <img src={impact1} alt="Impact Image 1" />
          <div className="illustration-text">The Spark of Event</div>
        </div>
        <div className="illustration-part">
          <img src={impact2} alt="Impact Image 2" />
          <div className="illustration-text">Event Planning in Full Swing</div>
        </div>
        <div className="illustration-part">
          <img src={impact3} alt="Impact Image 3" />
          <div className="illustration-text">Trans formational Impact</div>
        </div>
      </section>

      <section className="events-section">
        <h2>Our Events</h2>
        {events
          .filter(
            (event) => selectedYear === "all" || event.year === selectedYear
          )
          .map((event, index) => (
            <div key={index} className="event-card" data-year={event.year}>
              <div
                className="event-image"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              ></div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>{event.description}</p>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Event;
