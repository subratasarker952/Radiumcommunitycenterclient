import Loading from "../../../Components/Shared/Loading/Loading";
import useBookings from "../../../Components/hooks/useBookings";

const Tickets = () => {
  const { bookingIsLoading, bookingError, bookings } =
    useBookings;
    if(bookingIsLoading)return <Loading/>
    if(bookingError)console.log(bookingError)
    console.log(bookings)
  return <div></div>;
};

export default Tickets;
