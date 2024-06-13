import { Link } from "react-router-dom";

const EventsCard = ({ event }) => {
  const { _id, img, title, description, date, time, location } = event;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{date}</h2>
        <h2 className="card-title">{time}</h2>
        <h2 className="card-title">{location}</h2>
        <p>
          {description.length > 20
            ? description.slice(0, 19) + "..."
            : description}
        </p>
        <div className="card-actions">
          <Link to={`/events/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
