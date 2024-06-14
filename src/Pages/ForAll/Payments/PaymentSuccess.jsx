import { useLocation } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading/Loading";
import useOrderByTranId from "../../../Components/hooks/useOrderByTranId";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tran_id = query.get("tran_id");
  const { bookingIsLoading, booking } = useOrderByTranId(tran_id);
  console.log(booking)
  if (bookingIsLoading) return <Loading></Loading>;
  if (!booking) return <p>No order found in this id</p>;
  const {
    date,
    amount,
    title,
    email,
    paidAt,
    paymentMethod,
    paymentStatus,
    mobile,
  } = booking;

  return (
    <div className="w-[500px] print:absolute top-0 left-0 right-0 mx-auto text-xl">
      <p className="font-bold text-3xl">Payment Info</p>
      <hr className="my-5 border border-red-500" />
      <div>
        <div className="flex justify-between">
          <p>Date</p>
          <p>{date}</p>
        </div>
        <div className="flex justify-between">
          <p>Tran id</p>
          <p>{tran_id}</p>
        </div>
        <div className="flex justify-between">
          <p>Event name:-</p>
          <p>{title}</p>
        </div>
        <div className="flex justify-between">
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className="flex justify-between">
          <p>Phone</p>
          <p>{mobile}</p>
        </div>

        <div className="flex justify-between">
          <p>Payment status</p>
          <p>{paymentStatus}</p>
        </div>
        <div className="flex justify-between">
          <p>Payment Method</p>
          <p>{paymentMethod}</p>
        </div>
        <div className="flex justify-between">
          <p>Payment Time</p>
          <p>{paidAt}</p>
        </div>
        <div className="flex justify-between">
          <p>Amount</p>
          <p>{amount} /-</p>
        </div>
      </div>
      <button
        className="btn print:hidden btn-sm block bg-pink-500 w-full"
        onClick={() => window.print()}
      >
        Print
      </button>
    </div>
  );
};

export default PaymentSuccess;
