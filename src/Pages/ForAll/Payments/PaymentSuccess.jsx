import { useLocation } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading/Loading";
import useOrderByTranId from "../../../Components/hooks/useOrderByTranId";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tran_id = query.get("tran_id");
  const { bookingIsLoading, booking } = useOrderByTranId(tran_id);
  console.log(booking);
  if (bookingIsLoading) return <Loading></Loading>;
  if (!booking) return <p>No order found in this id</p>;
  const {
    img,
    date,
    seat,
    amount,
    title,
    email,
    location: eventLocation,
    paidAt,
    paymentMethod,
    paymentStatus,
    mobile,
  } = booking;

  return (
        <div className="card w-[500px] mx-auto mt-3 bg-base-100 shadow-xl">
          <figure className="px-3 pt-3">
            <img src={img} alt={title} className="rounded-xl h-[150px] w-[200px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Event:- {title}</h2>
            <h2 className="card-title">Date:- {date}</h2>
            <h2 className="card-title">Number of Seat:- {seat}  </h2>
            <h2 className="card-title">Total Amount:- {amount} /-</h2>
            <h2 className="card-title">Email:-{email}</h2>
            <h2 className="card-title">Mobile:-{mobile}</h2>
            <h2 className="card-title">Location:-{eventLocation}</h2>
            <h2 className="card-title">Paid At:-{paidAt}</h2>
            <h2 className="card-title capitalize">
              {paymentStatus} || {paymentMethod}
            </h2>
            <div className="card-actions">
              <button
                className="btn print:hidden btn-sm block bg-pink-500 w-full"
                onClick={() => window.print()}
              >
                Print
              </button>
            </div>
          </div>
        </div>
  );
};

export default PaymentSuccess;
