import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://radiumcommnitycenterserver.vercel.app/events")
      .then((response) => response.json())
      .then((json) => setEvents(json));
  }, [events]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 m-2">
        {events.map(e=><EventsCard key={e._id} event={e}></EventsCard>)}
      </div>
    </div>
  );
};

export default Events;
