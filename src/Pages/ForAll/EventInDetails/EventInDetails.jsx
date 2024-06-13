import { useLoaderData } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading/Loading";
import { useState } from "react";
import Booking from "../Booking/Booking";
import useAuth from "../../../Components/hooks/useAuth";

const EventInDetails = () => {
  const { user } = useAuth();
  const [bookingForm, setBookingForm] = useState(false);
  const event = useLoaderData();
  if (!event) return <Loading />;
  const { img, title, description, date, time, location } = event;
  const handleBooking = () => {
    if (!user) {
      return alert("please Login");
    } else {
      setBookingForm(!bookingForm);
    }
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl">Title:- {title}</h2>
          <h2 className="text-3xl">Date:- {date}</h2>
          <h2 className="text-3xl">Time:- {time}</h2>
          <p className="text-3xl">{location}</p>
          <p className="text-3xl">{description}</p>
          <div className="card-actions">
            <button onClick={handleBooking} className="btn btn-primary">
              Booking Now
            </button>
          </div>
        </div>
      </div>
      <div className={`${bookingForm ? "block" : "hidden"}  bg-red-500 py-5`}>
        <Booking event={event}></Booking>
      </div>
    </div>
  );
};

export default EventInDetails;
