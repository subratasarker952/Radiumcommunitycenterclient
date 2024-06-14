import Loading from "../../../Components/Shared/Loading/Loading";
import useBookings from "../../../Components/hooks/useBookings";
import BookingCard from "./BookingCard";

const Tickets = () => {
  const { bookingIsLoading, bookingError, bookings } = useBookings;
  if (bookingIsLoading) return <Loading />;
  if (bookingError) console.log(bookingError);
  console.log(bookings);
  return (
    <div>
      <div>
        {/* {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking}></BookingCard>
        ))} */}
      </div>
    </div>
  );
};

export default Tickets;
