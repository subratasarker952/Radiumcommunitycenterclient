import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useOrderByTranId = (tran_id) => {
    const { user } = useAuth()
    const { isPending: orderIsLoading, error: orderError, data: order = {} } = useQuery({
        queryKey: ['order', user?.email, tran_id],
        enabled: (user !== null),
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/bookings/${tran_id}?email=${user?.email}`)
            return res.data
        }
    })
    return { orderIsLoading, orderError, order }
};

export default useOrderByTranId;