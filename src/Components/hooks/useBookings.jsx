import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useBookings = () => {
  const { user } = useAuth();
  const {
    isPending: bookingIsLoading,
    error: bookingError,
    data: bookings = [],
    refetch: refetchBookings,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: user !== null,
    queryFn: async () => {
      const res = await axios.get(
        `https://radiumcommnitycenterserver.vercel.app/booking/email/:${user?.email}?email=${user?.email}`,{
          headers:{
            authorization: `bearer ${localStorage.getItem('token')}`
          }
        }
      );
      return res.data;
    },
  });
  return { bookingIsLoading, bookingError, bookings, refetchBookings };
};

export default useBookings;
