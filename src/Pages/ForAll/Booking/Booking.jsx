import useAuth from "../../../Components/hooks/useAuth";
import { useState } from "react";

const Booking = ({ event }) => {
  const { user } = useAuth();
  const [seat, setSeat] = useState(1);
  const { _id,img, title, date, time, location, ticketPrice } = event;

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const mobile = form.mobile.value;
    const bookingData = {
      eventId: _id,
      email: user?.email,
      img,
      seat,
      title,
      date,
      time,
      location,
      mobile,
      amount: seat * ticketPrice,
      paymentAt: new Date(),
    };
    const sure = window.confirm("Are you sure pay now for confirm booking?");
    if (sure) {
      const newBookingData = {
        ...bookingData,
        paymentMethod: "online",
        paymentStatus: "due",
      };
      fetch(`https://radiumcommnitycenterserver.vercel.app/payments/initialize`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBookingData),
      }).then((res) => res.json())
        .then((data) => {
          window.location.replace(data.url);
        });
    }
  };

  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <h2 className=" mt-2 text-3xl text-center">{ticketPrice} tk/seat</h2>
          <form className="card-body" onSubmit={handleForm}>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            {/* seat */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Number of seat</span>
              </label>
              <input
                type="number"
                name="seat"
                defaultValue={1}
                min={1}
                max={10}
                className="input input-bordered"
                required
                onChange={(e) => setSeat(e.target.value)}
              />
            </div>
            {/* MOBILE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                name="mobile"
                placeholder="Your Mobile like 017..."
                min={11}
                max={11}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                {ticketPrice * seat} tk pay For booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
