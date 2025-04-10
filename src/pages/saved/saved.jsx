import React from 'react';
import { EventCard } from '../../components/EventCard/EventCard';
import img from '../../../assets/image2.jpg';
import img2 from '../../../assets/image3.jpg';
import img4 from '../../../assets/image4.jpg';
import img3 from '../../../assets/event.jpg';
import './saved.css'; // Optional if you want custom styling

function Saved() {
  const events = [
      {
        id: 0,
        image: img,
        name: "NU Men's Basketball vs. Iowa",
        date: "Mar 20",
        time: "8:00pm",
        location: "Welsh Ryan Arena",
        description: "Join us at Welsh-Ryan Arena to support the Wildcats as they take on Big Ten rival Iowa in a high-stakes showdown!",
        ticketLink: "https://www.nusports.com/tickets"
      },
      {
        id: 1,
        image: img2,
        name: "NU Men's Basketball vs. Iowa",
        date: "Mar 20",
        time: "8:00pm",
        location: "Welsh Ryan Arena",
        description: "Don’t miss the action as NU battles Iowa on home turf. Wear your purple and bring the Wildcat spirit!",
        ticketLink: "https://www.nusports.com/tickets"
      },
      {
          id: 2,
          image: img3,
          name: "Spring A Cappella Showcase",
          date: "Mar 25",
          time: "7:30pm",
          location: "Pick-Staiger Concert Hall",
          description: "Enjoy a night of stunning vocals and harmonies as Northwestern’s top a cappella groups perform their spring sets.",
          ticketLink: "https://www.nusports.com/tickets"
        },
        {
          id: 3,
          image: img4,
          name: "Jazz Night @ Norris",
          date: "Mar 27",
          time: "9:00pm",
          location: "Norris Center",
          description: "Unwind with smooth tunes, snacks, and good vibes at Jazz Night. Featuring student musicians in an intimate lounge setting.",
          ticketLink: "https://www.nusports.com/tickets"
        }
    ];

  return (
    <div className="home-container"> {/* reuse same container for now */}
      <div className="events-list">
        <h2 className="saved-title">Saved Events!</h2>

        {events.map(event => (
          <EventCard
            key={event.id}
            image={event.image}
            name={event.name}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            ticketLink={event.ticketLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Saved;
