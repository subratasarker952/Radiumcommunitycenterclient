import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import useAuth from "../../../Components/hooks/useAuth";

const Tickets = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(
      `https://radiumcommnitycenterserver.vercel.app/bookings/email/${user?.email}?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setBookings(json));
  }, [bookings, user]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
         {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
