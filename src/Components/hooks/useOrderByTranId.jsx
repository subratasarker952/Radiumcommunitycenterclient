import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useOrderByTranId = (tran_id) => {
  const { user } = useAuth();
  const {
    isPending: bookingIsLoading,
    error: orderError,
    data: booking = {},
  } = useQuery({
    queryKey: ["booking", user?.email, tran_id],
    enabled: user !== null,
    queryFn: async () => {
      const res = await axios.get(
        `https://radiumcommnitycenterserver.vercel.app/bookings/tran_id/${tran_id}?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data;
    },
  });
  return { bookingIsLoading, orderError, booking };
};

export default useOrderByTranId;
